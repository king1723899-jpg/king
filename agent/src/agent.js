import fs from 'node:fs';
import path from 'node:path';

export class WorkspaceAgent {
  constructor({ workspaceRoot = process.cwd() } = {}) {
    this.workspaceRoot = workspaceRoot;
    this.agentName = process.env.AGENT_NAME || 'WorkspaceAgent';
  }

  async processPrompt(rawPrompt) {
    const prompt = String(rawPrompt || '').trim();

    if (!prompt) {
      return {
        status: 'error',
        message: 'Please provide a prompt for the agent.',
      };
    }

    const plan = this.buildPlan(prompt);
    const result = this.executePlan(prompt, plan);

    return {
      status: 'ok',
      agent: this.agentName,
      workspaceRoot: this.workspaceRoot,
      prompt,
      plan,
      result,
    };
  }

  buildPlan(prompt) {
    const lower = prompt.toLowerCase();
    const steps = [];

    if (/(list|show|scan|inspect|workspace)/.test(lower)) {
      steps.push('Inspect the workspace root and list relevant folders.');
    }

    if (/(read|open|view|file)/.test(lower)) {
      steps.push('Locate the most relevant file and read its contents.');
    }

    if (/(summary|overview|explain|describe)/.test(lower)) {
      steps.push('Summarize what is important and call out notable structure or risks.');
    }

    if (steps.length === 0) {
      steps.push('Review the workspace, identify the likely target, and answer the request clearly.');
    }

    return steps;
  }

  executePlan(prompt, plan) {
    const root = this.workspaceRoot;
    const entries = fs.existsSync(root) ? fs.readdirSync(root, { withFileTypes: true }) : [];

    const topLevel = entries
      .slice(0, 10)
      .map((entry) => entry.name)
      .join(', ');

    const lower = prompt.toLowerCase();

    if (/read|open|view|file/.test(lower)) {
      const candidate = this.findLikelyFile(prompt, root);
      if (candidate) {
        const content = fs.readFileSync(candidate, 'utf8');
        return {
          summary: `I found the likely target file and read it: ${path.relative(root, candidate)}`,
          file: path.relative(root, candidate),
          preview: content.slice(0, 400),
        };
      }
    }

    return {
      summary: `The workspace contains ${entries.length} top-level entries. Notable entries include: ${topLevel}.`,
      plan,
      topLevel,
    };
  }

  findLikelyFile(prompt, root) {
    const target = prompt.match(/[A-Za-z0-9_.\-/]+\.[A-Za-z0-9]+/g) || [];

    for (const candidate of target) {
      const absolute = path.resolve(root, candidate);
      if (fs.existsSync(absolute) && fs.statSync(absolute).isFile()) {
        return absolute;
      }
    }

    const extensions = ['.js', '.json', '.md', '.html', '.ts', '.py'];
    const files = this.walk(root);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        const relative = path.relative(root, file).toLowerCase();
        const text = prompt.toLowerCase();
        if (relative.includes(text) || text.includes(path.basename(file, ext).toLowerCase())) {
          return file;
        }
      }
    }

    return files.find((file) => ['package.json', 'README.md', 'server.js'].includes(path.basename(file))) || null;
  }

  walk(dir) {
    if (!fs.existsSync(dir)) return [];
    const result = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const resolved = path.join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        result.push(...this.walk(resolved));
      } else if (entry.isFile()) {
        result.push(resolved);
      }
    }
    return result;
  }
}

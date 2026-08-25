import { WorkspaceAgent } from './agent.js';

const prompt = process.argv.slice(2).join(' ') || 'Summarize the workspace and suggest next steps.';
const agent = new WorkspaceAgent({
  workspaceRoot: process.env.WORKSPACE_ROOT ? new URL(process.env.WORKSPACE_ROOT, import.meta.url).pathname : process.cwd(),
});

const result = await agent.processPrompt(prompt);
console.log(JSON.stringify(result, null, 2));

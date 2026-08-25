# Workspace Agent

This is a small local agent starter that can inspect a workspace, identify likely files, and provide a brief summary of the project.

## Run it

```bash
cd agent
node src/index.js "Summarize the workspace and suggest next steps."
```

## What it does

- Inspects the current workspace
- Builds a lightweight plan from the user prompt
- Locates likely doc or code files
- Returns a JSON result with the plan and summary

## Notes

- This starter uses only built-in Node modules.
- It is intentionally simple and easy to extend with actual tool calls or an API integration.

---
paths:
  - "**/*.sh"
  - "**/*.bash"
  - "**/Makefile"
---
## Shell Command Explanation Rule

For any shell command or script execution:
- Show the exact command you will run
- Explain each flag/argument in plain English
- Warn if the command is irreversible (delete, overwrite, deploy)
- Ask for confirmation before running
```

---

## Prompt to Paste into Claude Code
```
I want you to set up a persistent "explain before acting" system using 
CLAUDE.md rules — no hooks needed.

Do all of the following:

1. Edit or create ~/.claude/CLAUDE.md (global, applies to all projects).
   Add a section called "## Explain Before Acting" with these rules:
   - Before running any command, writing any file, or making any change,
     you must first explain in plain English: what you're doing, why you 
     need to do it, and what happens if skipped
   - Then ask: "Should I proceed? (yes / no / tell me more)"
   - If I say "tell me more", answer my questions and ask again
   - Only proceed after I say yes
   - Never skip this step, even for simple actions

2. Create the folder .claude/rules/ in the current project if it doesn't exist.
   Create .claude/rules/explain-commands.md with path targeting for:
   - **/*.sh, **/*.bash, **/Makefile, **/Dockerfile
   This rule should require you to show the exact command + explain every 
   flag before running, and warn if the action is irreversible.

3. Show me both files after creating them so I can verify.

4. Demonstrate the behavior: tell me what you would say before running 
   a command like "rm -rf ./dist && npm run build"
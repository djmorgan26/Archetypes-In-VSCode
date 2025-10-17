# Cascade Mode Prompts

These prompts instruct GitHub Copilot to work autonomously through multiple archetypes until the task is complete.

## Full Autonomous Mode (Windsurf Cascade Style)

Copy and paste this into Copilot Chat:

```
@workspace **AUTONOMOUS CASCADE MODE**

I need you to: [DESCRIBE YOUR FEATURE/GOAL]

Work through this autonomously using the archetype system:

**Phase 1 - Planning:**
1. Switch to Planner archetype (read .vscode/archetypes/planner.md)
2. Analyze the current codebase structure
3. Break down the goal into 5-10 specific, actionable tasks
4. Output the plan as a numbered list with file references
5. Ask me: "Does this plan look good? Reply 'yes' to proceed or suggest changes."

**Phase 2 - Implementation (repeat for each task):**
1. Switch to Implementer archetype (read .vscode/archetypes/implementer.md)
2. Announce: "Implementing task #N: [description]"
3. Use Copilot Edits mode to make the changes
4. Show me what you changed
5. Ask me: "Implementation complete. Reply 'continue' to review, or 'skip' to move to next task."

**Phase 3 - Review (after each implementation):**
1. Switch to Reviewer archetype (read .vscode/archetypes/reviewer.md)
2. Review the changes you just made
3. List any concerns or recommendations
4. If critical issues found: go back to Implementer and fix them
5. If minor issues: note them for later
6. Ask me: "Review complete. Reply 'continue' to implement next task, or 'stop' to pause."

**Phase 4 - Final Review:**
1. When all tasks complete, do a final review as Reviewer
2. Summarize what was built
3. List any remaining TODOs or improvements
4. Ask if I want to address any of them

**Rules:**
- Stay in the current archetype's character (don't mix behaviors)
- After each major step, pause and ask for my confirmation
- Keep me informed of progress
- If you encounter blockers, stop and ask for guidance
- Use .vscode/state.json to track progress (read and update it)

**Begin now with Phase 1 (Planning).**
```

---

## Semi-Autonomous Mode (With Checkpoints)

Use this if you want more control:

```
@workspace **SEMI-AUTONOMOUS MODE**

Goal: [DESCRIBE YOUR FEATURE]

**Workflow:**
1. **Planner**: Create a detailed plan
   - Wait for my approval before proceeding

2. **Implementation Loop** (for each task):
   - **Implementer**: Implement the task using Copilot Edits
   - **Reviewer**: Review the implementation
   - Show me both results and ask if I want to continue

3. **Final Summary**: When done, summarize everything built

**Start with planning phase.**
```

---

## Fully Autonomous Mode (No Interruptions)

Use with caution - Copilot will make all decisions:

```
@workspace **FULLY AUTONOMOUS CASCADE**

Task: [YOUR GOAL]

Execute the complete Planner → Implementer → Reviewer cycle for this task.

Work through ALL steps without asking for confirmation:
1. Plan the implementation (Planner archetype)
2. Implement each task (Implementer archetype)
3. Review after each implementation (Reviewer archetype)
4. Fix any issues found during review
5. Continue until all tasks are complete

Only stop and ask me if you encounter:
- Ambiguous requirements
- Critical errors you can't fix
- Missing information needed to proceed

Update .vscode/state.json as you progress.

**Begin autonomous execution now.**
```

---

## Quick Start Cascade

Simple version:

```
@workspace I need [FEATURE].

Use the archetype workflow from .github/copilot-instructions.md:
planner → implementer → reviewer (repeat until done)

Ask for approval at each major milestone.
```

---

## Example: Complete App Build

```
@workspace **AUTONOMOUS CASCADE MODE**

I need you to: Build a simple TODO app with the following:
- Add todo items
- Mark items as complete
- Delete items
- Filter by status (all/active/completed)
- Persist to localStorage

Work through this autonomously using the archetype system:

**Phase 1 - Planning:**
1. Switch to Planner archetype (read .vscode/archetypes/planner.md)
2. Analyze the current codebase structure
3. Break down the goal into 5-10 specific, actionable tasks
4. Output the plan as a numbered list with file references
5. Ask me: "Does this plan look good? Reply 'yes' to proceed or suggest changes."

**Phase 2 - Implementation (repeat for each task):**
1. Switch to Implementer archetype (read .vscode/archetypes/implementer.md)
2. Announce: "Implementing task #N: [description]"
3. Use Copilot Edits mode to make the changes
4. Show me what you changed
5. Ask me: "Implementation complete. Reply 'continue' to review, or 'skip' to move to next task."

**Phase 3 - Review (after each implementation):**
1. Switch to Reviewer archetype (read .vscode/archetypes/reviewer.md)
2. Review the changes you just made
3. List any concerns or recommendations
4. If critical issues found: go back to Implementer and fix them
5. If minor issues: note them for later
6. Ask me: "Review complete. Reply 'continue' to implement next task, or 'stop' to pause."

**Phase 4 - Final Review:**
1. When all tasks complete, do a final review as Reviewer
2. Summarize what was built
3. List any remaining TODOs or improvements
4. Ask if I want to address any of them

**Rules:**
- Stay in the current archetype's character (don't mix behaviors)
- After each major step, pause and ask for my confirmation
- Keep me informed of progress
- If you encounter blockers, stop and ask for guidance
- Use .vscode/state.json to track progress (read and update it)

**Begin now with Phase 1 (Planning).**
```

---

## Tips for Best Results

### Make Copilot More Autonomous
Add phrases like:
- "Work through this autonomously"
- "Don't ask for confirmation unless critical"
- "Execute all steps in sequence"
- "Continue until complete"

### Keep Control
Add checkpoints:
- "Ask for approval after planning"
- "Pause after each implementation"
- "Wait for 'continue' before next task"

### Handle State
Tell Copilot to:
- "Read .vscode/state.json before starting"
- "Update state.json after each phase"
- "Check for existing tasks before planning"

### Use Edits Mode
Remind Copilot:
- "Use Copilot Edits for multi-file changes"
- "Show me all proposed changes before applying"
- "Use Edits mode when implementing"

---

## Customization

Edit this template to match your workflow:

```
@workspace **MY CUSTOM CASCADE**

Goal: [GOAL]

**My Workflow:**
[Define your specific steps]

**My Rules:**
- [Your rule 1]
- [Your rule 2]

**Archetypes to use:**
- [List which archetypes and when]

**Begin with [starting phase].**
```

---

## Keyboard Shortcut (Optional)

You can create a snippet in VS Code:

1. File → Preferences → Configure User Snippets
2. Select "markdown.json"
3. Add:

```json
{
  "Cascade Mode": {
    "prefix": "/cascade",
    "body": [
      "@workspace **AUTONOMOUS CASCADE MODE**",
      "",
      "I need you to: $1",
      "",
      "Work through this autonomously using the archetype system:",
      "",
      "**Phase 1 - Planning:**",
      "1. Switch to Planner archetype (read .vscode/archetypes/planner.md)",
      "2. Analyze the current codebase structure",
      "3. Break down the goal into 5-10 specific, actionable tasks",
      "4. Output the plan as a numbered list with file references",
      "5. Ask me: \"Does this plan look good? Reply 'yes' to proceed or suggest changes.\"",
      "",
      "**Phase 2 - Implementation (repeat for each task):**",
      "1. Switch to Implementer archetype",
      "2. Announce: \"Implementing task #N: [description]\"",
      "3. Use Copilot Edits mode to make the changes",
      "4. Show me what you changed",
      "5. Ask: \"Reply 'continue' to review, or 'skip' to move to next task.\"",
      "",
      "**Phase 3 - Review (after each implementation):**",
      "1. Switch to Reviewer archetype",
      "2. Review the changes",
      "3. List concerns or recommendations",
      "4. If critical issues: fix them",
      "5. Ask: \"Reply 'continue' for next task, or 'stop' to pause.\"",
      "",
      "**Rules:**",
      "- Stay in archetype character",
      "- Ask for confirmation at major steps",
      "- Keep me informed",
      "- Update .vscode/state.json",
      "",
      "**Begin now with Phase 1 (Planning).**"
    ],
    "description": "Autonomous cascade mode for Copilot"
  }
}
```

Then in Copilot Chat, type `/cascade` and Tab to expand!

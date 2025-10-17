# Using AI Archetypes with GitHub Copilot

This guide shows you how to use the archetype system with **GitHub Copilot** in VS Code to achieve Windsurf Cascade-like workflows.

## Quick Start

### 1. Ensure GitHub Copilot is Installed

- Install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Make sure you're signed in with an active Copilot subscription

### 2. Open Copilot Chat

Press `Cmd+Shift+I` (Mac) or `Ctrl+Shift+I` (Windows/Linux)

### 3. Use Archetype Prompts

Type one of these to activate an archetype:

```
@workspace /planner Create a plan for [your feature]
```

```
@workspace /implementer Implement [specific task]
```

```
@workspace /reviewer Review [file or component]
```

---

## How It Works

### Automatic Context Loading

GitHub Copilot automatically reads `.github/copilot-instructions.md` which contains:
- Archetype definitions and behaviors
- Rules for each archetype (Planner, Implementer, Reviewer)
- Examples and workflow patterns

### Workspace Context

When you use `@workspace`, Copilot gets:
- All archetype definitions from `.vscode/archetypes/`
- Current state from `.vscode/state.json`
- Your project structure and files
- The archetype system instructions

---

## Usage Patterns

### Pattern 1: Single Archetype Interaction

**Open Copilot Chat** → Type archetype prompt → Get response

Example:
```
You: @workspace /planner I need to add user authentication

Copilot: [Analyzes your codebase and creates a task list]
1. Create auth service in src/services/auth.ts
2. Add login/logout endpoints
3. Implement JWT token handling
4. Create auth middleware
5. Update user model with password hashing
```

---

### Pattern 2: Copilot Edits (Multi-file Implementation)

**For Implementation tasks**, use Copilot Edits mode:

1. Press `Cmd+I` (Mac) or `Ctrl+I` (Windows/Linux) in the editor
2. Type your implementer prompt:
   ```
   @workspace /implementer Create the authentication service from the plan
   ```
3. Copilot will propose edits across multiple files
4. Review and accept the changes

---

### Pattern 3: Cascade Workflow (Like Windsurf)

Chain archetypes together for complex features:

#### Step 1: Plan
```
@workspace /planner
Add a real-time notification system with WebSockets

Break this down into tasks and save to .vscode/state.json
```

#### Step 2: Implement (repeat for each task)
```
@workspace /implementer
Check .vscode/state.json and implement task #1
```

#### Step 3: Review
```
@workspace /reviewer
Review the notification service for performance and security issues
```

#### Step 4: Refine
```
@workspace /implementer
Address the concerns raised in the review
```

---

## Quick Access via Tasks

### Get Archetype Prompts

Run these from Command Palette → `Tasks: Run Task`:

- **Copilot: Get Planner Prompt** - Shows planner template
- **Copilot: Get Implementer Prompt** - Shows implementer template
- **Copilot: Get Reviewer Prompt** - Shows reviewer template
- **Copilot: Show All Prompts** - Displays all available templates

These will print ready-to-paste prompts in the terminal.

---

## Example: Complete Feature Development

Let's build a "Dark Mode Toggle" feature:

### 1. Planning Phase

**In Copilot Chat:**
```
@workspace /planner
Add a dark mode toggle to the application with theme persistence

Create a detailed implementation plan.
```

**Copilot responds with:**
```
Plan for Dark Mode Implementation:

1. Create theme context (src/contexts/ThemeContext.tsx)
   - Define light/dark theme objects
   - Create context provider
   - Export useTheme hook

2. Add theme toggle component (src/components/ThemeToggle.tsx)
   - Create toggle switch UI
   - Connect to theme context
   - Add accessibility attributes

3. Implement theme persistence (src/utils/theme.ts)
   - Save preference to localStorage
   - Load on app initialization
   - Handle system preference detection

4. Apply theme styling (src/styles/theme.css)
   - Define CSS variables for both themes
   - Update global styles
   - Add transition animations

5. Update App component (src/App.tsx)
   - Wrap with ThemeProvider
   - Apply theme class to root element
```

### 2. Implementation Phase

**Open Copilot Edits (Cmd+I):**
```
@workspace /implementer
Implement task 1: Create theme context at src/contexts/ThemeContext.tsx

Follow the plan from state.json.
```

**Copilot creates the file with:**
- Theme type definitions
- Context setup
- Provider component
- useTheme hook

**Accept the changes**, then continue:

```
@workspace /implementer
Task 2: Create the ThemeToggle component
```

Repeat for each task.

### 3. Review Phase

**In Copilot Chat:**
```
@workspace /reviewer
Review the dark mode implementation for:
- Accessibility issues
- Performance concerns
- Edge cases
- Browser compatibility
```

**Copilot provides:**
```
Review of Dark Mode Implementation:

✅ Strengths:
- Clean context implementation
- Proper localStorage usage
- Good separation of concerns

⚠️ Concerns:
1. No error handling for localStorage (may fail in private browsing)
2. Missing ARIA labels on toggle button
3. Theme flash on initial load (FOUC)
4. No prefers-reduced-motion check for animations

💡 Recommendations:
1. Add try-catch around localStorage operations
2. Add aria-label="Toggle dark mode" to button
3. Implement SSR-safe theme initialization
4. Respect user's motion preferences

🔒 Security: No issues found

🧪 Testing Suggestions:
- Test in private browsing mode
- Test with localStorage disabled
- Test theme persistence across page reloads
- Verify keyboard navigation
```

### 4. Refinement Phase

```
@workspace /implementer
Address the accessibility concerns from the review:
1. Add ARIA labels to ThemeToggle
2. Add error handling for localStorage
3. Implement FOUC prevention
```

---

## Advanced Techniques

### Technique 1: State-Aware Workflows

Make Copilot check state before acting:

```
@workspace
Read .vscode/state.json.

If there are pending todos:
  Act as Implementer and complete the next task

If there are no pending todos:
  Act as Planner and help me plan my next feature
```

### Technique 2: File-Specific Review

```
@workspace /reviewer
Review #file:src/components/Login.tsx for security vulnerabilities
```

### Technique 3: CASCADE MODE (Fully Autonomous)

**This is what you asked for!** Make Copilot work autonomously through the entire workflow:

```
@workspace **CASCADE MODE**

Build a contact form component with validation, submit handling, and error states.

Use the autonomous archetype cascade workflow from .github/copilot-instructions.md.

Work through planning → implementation → review automatically.
Ask for approval only at major checkpoints.
```

**What happens:**
1. Copilot switches to Planner → creates task breakdown → asks "proceed?"
2. You say "yes"
3. Copilot switches to Implementer → builds task #1 → switches to Reviewer → reviews it
4. Asks "continue to next task?"
5. You say "continue"
6. Repeats until all tasks done
7. Final review and summary

**Quick access**: Run task `Copilot: Activate CASCADE MODE` to get the full prompt template.

---

### Technique 3b: Semi-Autonomous (More Control)

Let Copilot chain archetypes with checkpoints:

```
@workspace
I need to refactor the authentication system to use OAuth.

Please work through this autonomously:
1. Use Planner to create a migration plan
2. Use Implementer to execute each task
3. Use Reviewer after each implementation
4. Update .vscode/state.json as you go

Ask for my approval before proceeding to the next task.
```

### Technique 4: Context Injection

Reference archetype files directly:

```
@workspace
#file:.vscode/archetypes/reviewer.md

Acting as this archetype, review my last commit for potential bugs.
```

---

## Comparison: This System vs. Windsurf Cascade

| Feature | Windsurf Cascade | This Archetype System |
|---------|-----------------|------------------------|
| Archetype switching | Built-in UI | Prompt-based (`/planner`, etc.) |
| State tracking | Automatic | Via `.vscode/state.json` |
| Multi-file edits | Native | Copilot Edits mode |
| Workflow automation | Autonomous | Semi-autonomous (with prompts) |
| Context awareness | Full codebase | Full codebase (@workspace) |
| Cost | Subscription | GitHub Copilot subscription |
| Customization | Limited | Fully customizable (edit .md files) |

### Advantages Over Windsurf

- Works in VS Code (your preferred editor)
- Fully customizable archetype definitions
- Can add unlimited custom archetypes
- State files are version-controllable
- Works with existing VS Code extensions

### Trade-offs

- Requires manual archetype switching (via prompts)
- Less visual UI than Windsurf
- State tracking requires some manual checks
- No built-in "Cascade" button (but can script it)

---

## Tips for Best Results

### 1. Be Specific with Context

Good:
```
@workspace /implementer
Implement the login function in src/auth/login.ts
Use JWT tokens and bcrypt for password hashing
```

Bad:
```
@workspace /implementer
Make a login thing
```

### 2. Use @workspace for Full Context

Always start with `@workspace` to give Copilot access to:
- All files in your project
- Archetype definitions
- State tracking

### 3. Reference Files Explicitly

```
@workspace /reviewer
Review #file:src/components/UserProfile.tsx
Check .vscode/state.json for planned changes
```

### 4. Chain Thoughtfully

Don't try to do everything at once:
```
@workspace /planner Create plan
→ Review plan, adjust if needed
→ @workspace /implementer Task 1
→ @workspace /reviewer Review implementation
→ Repeat for next task
```

### 5. Update State Manually

After Copilot plans tasks, you may need to manually update `state.json`:
```json
{
  "todos": [
    {
      "id": "task-1",
      "description": "Create auth service",
      "file": "src/services/auth.ts"
    }
  ]
}
```

Or ask Copilot:
```
@workspace
Add these tasks to .vscode/state.json:
[paste task list]
```

---

## Customizing Archetypes

### Add Your Own Archetype

1. Create `.vscode/archetypes/yourArchetype.md`:
```markdown
# Your Archetype

## Role
Describe the role...

## Rules
- Rule 1
- Rule 2

## Behavior
Describe expected behavior...
```

2. Update `.github/copilot-instructions.md`:
```markdown
### Your Archetype
**When to use**: [description]
**Behavior**: [details]
```

3. Use it:
```
@workspace
Act as a [YourArchetype] archetype.
Read .vscode/archetypes/yourArchetype.md for rules.

[Your task...]
```

### Example: Tester Archetype

Create `.vscode/archetypes/tester.md`:
```markdown
# Tester Archetype

## Role
Generate comprehensive test suites for implemented features

## Rules
- Write tests for happy path and edge cases
- Use the project's testing framework
- Aim for 80%+ code coverage
- Include unit, integration, and E2E tests
- Add test documentation
```

Use it:
```
@workspace
Act as a Tester archetype from .vscode/archetypes/tester.md

Generate tests for the authentication service in src/services/auth.ts
```

---

## Troubleshooting

### Copilot Doesn't Follow Archetype Rules

**Solution**: Be more explicit in your prompt:
```
@workspace
Read and strictly follow the rules in .vscode/archetypes/planner.md

Create a plan for...
```

### Copilot Doesn't See state.json

**Solution**: Reference it explicitly:
```
@workspace
Check .vscode/state.json for current tasks.
Then, as Implementer, complete the next pending todo.
```

### Prompts Are Too Long

**Solution**: Use the quick tasks:
1. `Tasks: Run Task` → `Copilot: Get Planner Prompt`
2. Copy the output
3. Paste in Copilot Chat

### Want More Automation

**Solution**: Create a VS Code extension or use the existing Node scripts:
```bash
# Generate tasks with Planner script
node .vscode/runArchetype.js planner

# Then use Copilot to implement them
@workspace /implementer
Check state.json and implement task #1
```

---

## Next Steps

1. **Try a Simple Feature**: Start with the dark mode example above
2. **Create Your Own Archetypes**: Add tester, documenter, or debugger archetypes
3. **Build Workflows**: Create common patterns (feature, bugfix, refactor)
4. **Share with Team**: Commit `.github/` and `.vscode/` to version control
5. **Iterate**: Refine archetype prompts based on what works

---

## Resources

- **Prompt Templates**: See `.vscode/copilot-prompts.md`
- **Archetype Definitions**: See `.vscode/archetypes/*.md`
- **Main Instructions**: See `.github/copilot-instructions.md`
- **GitHub Copilot Docs**: https://docs.github.com/copilot

---

## Example Prompts to Get Started

Copy-paste these into Copilot Chat:

### Quick Planning
```
@workspace /planner
Analyze my current codebase and suggest 3 high-impact improvements
```

### Quick Implementation
```
@workspace /implementer
Add input validation to all form components
Use Copilot Edits for multi-file changes
```

### Quick Review
```
@workspace /reviewer
Review my last 3 commits for potential bugs and security issues
```

### Autonomous Workflow (CASCADE MODE)
```
@workspace **CASCADE MODE**

I want to add an admin dashboard.

Work through this autonomously:
1. Planner: Create detailed task breakdown
2. Ask for my approval
3. Implementer: Execute tasks one by one
4. Reviewer: Review after each implementation
5. Ask before moving to next task

Update .vscode/state.json as we progress.

Follow the cascade workflow from .github/copilot-instructions.md.
```

---

## 🚀 CASCADE MODE: Full Autonomous Example

**Want Copilot to build something automatically?** Here's the complete workflow:

### Step 1: Activate CASCADE MODE

**Run this task**: `Command Palette` → `Tasks: Run Task` → `Copilot: Activate CASCADE MODE`

Or paste this directly into Copilot Chat:

```
@workspace **CASCADE MODE**

Build a TODO app with:
- Add/delete/complete items
- Filter by status
- LocalStorage persistence

Use the autonomous cascade workflow from .github/copilot-instructions.md.

Work through planner → implementer → reviewer automatically.
```

### Step 2: Copilot Plans (Planner Archetype)

Copilot responds:
```
**Phase 1 - Planning** (Planner archetype active)

Task breakdown for TODO app:

1. Create TodoList component (src/components/TodoList.tsx)
2. Create TodoItem component (src/components/TodoItem.tsx)
3. Add state management with hooks (src/hooks/useTodos.ts)
4. Implement localStorage persistence (src/utils/storage.ts)
5. Add filter functionality (all/active/completed)
6. Create AddTodo input component
7. Add styling

Does this plan look good? Reply 'yes' to proceed.
```

### Step 3: You Approve

```
yes
```

### Step 4: Copilot Implements + Reviews (Automatic Loop)

Copilot now automatically:

```
**Phase 2 - Implementation** (Implementer archetype active)

Implementing task #1: Create TodoList component

[Uses Copilot Edits to create the file]

✅ Created src/components/TodoList.tsx with:
- TodoList component structure
- Props interface
- Basic rendering logic

**Phase 3 - Review** (Reviewer archetype active)

Reviewing TodoList component:

✅ Code structure is clean
⚠️ Missing PropTypes/TypeScript types
💡 Recommend: Add error boundaries

Reply 'continue' for next task or 'fix' to address concerns.
```

### Step 5: You Continue

```
continue
```

Copilot repeats the implement → review cycle for tasks #2, #3, etc. until complete.

### Step 6: Final Summary

After all tasks:
```
**Phase 4 - Complete** (Final Review)

✅ TODO app fully implemented

What was built:
- 3 components (TodoList, TodoItem, AddTodo)
- State management hook
- LocalStorage persistence
- Filter functionality

Remaining improvements:
- Add unit tests
- Improve error handling
- Add animations

Would you like me to implement any of these?
```

---

## How to Customize CASCADE MODE

Edit `.vscode/cascade-prompt.md` to change:
- How many checkpoints Copilot pauses at
- What information it shows you
- How it handles errors
- State tracking behavior

**Example customization**:
```markdown
**My Custom CASCADE:**

Rules:
- Never ask for confirmation (fully autonomous)
- Show only final summary
- Auto-fix all reviewer concerns
- Update state.json after each task
```

Then use it:
```
@workspace
Use my custom cascade from .vscode/cascade-prompt.md

Build [feature]
```

---

Happy coding with AI Archetypes!

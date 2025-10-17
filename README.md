# Multi-Archetype AI Workflow for VS Code

A fully functional **Planner → Implementer → Reviewer** workflow system that works with **GitHub Copilot** to achieve Windsurf Cascade-like capabilities in VS Code.

## Two Ways to Use This System

### 1. With GitHub Copilot (Recommended)
Use AI archetypes interactively with GitHub Copilot Chat for intelligent planning, implementation, and code review.

**See [COPILOT-GUIDE.md](COPILOT-GUIDE.md) for complete instructions.**

Quick start:
```
@workspace /planner Create a plan for [feature]
@workspace /implementer Implement [task]
@workspace /reviewer Review [code]
```

### 2. Standalone Automation (Demo)
Run automated scripts that simulate archetype behaviors without AI.

**See below for standalone usage.**

---

## What This System Does

This project provides a complete archetype-based workflow where:

1. **Planner** analyzes source files, identifies TODOs, and creates actionable task lists
2. **Implementer** executes tasks from the queue by making concrete code changes
3. **Reviewer** evaluates completed work and provides quality feedback

All actions are logged, state is tracked in JSON, and you can verify every step by inspecting the files.

## Project Structure

```
.github/
└── copilot-instructions.md  # GitHub Copilot archetype instructions (auto-loaded)

.vscode/
├── archetypes/
│   ├── planner.md           # Planner archetype definition and rules
│   ├── implementer.md       # Implementer archetype definition and rules
│   └── reviewer.md          # Reviewer archetype definition and rules
├── sample_source/
│   └── app.txt              # Sample source file that gets modified
├── state.json               # Current workflow state (todos, completed, reviews)
├── workflow.log             # Timestamped log of all actions
├── copilot-prompts.md       # Copy-paste prompts for Copilot Chat
├── archetype-switcher.js    # Helper script for generating prompts
├── runArchetype.js          # Standalone controller script
├── applyPlanner.js          # Standalone planner implementation
├── applyImplementer.js      # Standalone implementer implementation
├── applyReviewer.js         # Standalone reviewer implementation
├── settings.json            # VS Code workspace settings
└── tasks.json               # VS Code tasks

README.md                    # This file (general overview)
COPILOT-GUIDE.md            # Complete guide for using with GitHub Copilot
```

## Workflow Visualization

```
┌─────────────┐
│  Developer  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│                    VS Code Tasks                        │
└─────────────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌──────────┐      ┌──────────────┐      ┌──────────┐  │
│  │ PLANNER  │ ───> │ IMPLEMENTER  │ ───> │ REVIEWER │  │
│  └──────────┘      │              │      └──────────┘  │
│       │            └──────┬───────┘            │        │
│       │                   │                    │        │
│       ▼                   ▼                    ▼        │
│  ┌─────────────────────────────────────────────────┐   │
│  │              state.json                         │   │
│  │  • activeArchetype                              │   │
│  │  • todos[]                                      │   │
│  │  • completed[]                                  │   │
│  │  • reviews[]                                    │   │
│  └─────────────────────────────────────────────────┘   │
│       │                   │                    │        │
│       ▼                   ▼                    ▼        │
│  ┌─────────────────────────────────────────────────┐   │
│  │           workflow.log (timestamped)            │   │
│  └─────────────────────────────────────────────────┘   │
│                          │                             │
│                          ▼                             │
│                  sample_source/app.txt                 │
│                   (actual changes)                     │
└──────────────────────────────────────────────────────────┘
```

## How to Use

### 1. Open in VS Code

```bash
cd /path/to/Archetypes-In-VSCode
code .
```

### 2. Run the Workflow

Open the Command Palette (`Cmd+Shift+P` on Mac, `Ctrl+Shift+P` on Windows/Linux) and type:

```
Tasks: Run Task
```

Then select one of these tasks:

- **Run Planner Archetype** - Analyzes code and creates TODO items
- **Run Implementer Archetype** - Implements one TODO from the queue
- **Run Reviewer Archetype** - Reviews the most recent implementation
- **View Workflow Log** - Displays the timestamped activity log
- **View State** - Shows current state.json contents

### 3. Complete Workflow Example

Follow these steps in order to see the full workflow in action:

#### Step 1: Run Planner
```
Tasks: Run Task → Run Planner Archetype
```

**What to observe:**
- Terminal output shows TODO items discovered
- `.vscode/state.json` → `todos` array populated with tasks
- `.vscode/workflow.log` → New entries logged

#### Step 2: Run Implementer
```
Tasks: Run Task → Run Implementer Archetype
```

**What to observe:**
- Terminal shows before/after code changes
- `.vscode/sample_source/app.txt` → TODO line replaced with actual code
- `.vscode/state.json` → First TODO moved from `todos` to `completed`
- `.vscode/workflow.log` → Implementation logged with diff

#### Step 3: Run Reviewer
```
Tasks: Run Task → Run Reviewer Archetype
```

**What to observe:**
- Terminal displays review assessment, concerns, and recommendations
- `.vscode/state.json` → `reviews` array has new entry
- `.vscode/workflow.log` → Review verdict logged

#### Step 4: Repeat
Run Implementer again to handle the next TODO, then review it.

## Verification Checklist

Use this checklist to verify the system is performing real work:

- [ ] **Initial State**: Open `.vscode/state.json` - confirm `todos` array is empty
- [ ] **After Planner**: Run Planner task, then check:
  - [ ] `state.json` shows 2 todos in the `todos` array
  - [ ] `workflow.log` has timestamped "PLANNER" entries
  - [ ] Terminal output lists discovered TODO items
- [ ] **After Implementer**: Run Implementer task, then check:
  - [ ] `sample_source/app.txt` changed (TODO replaced with function)
  - [ ] `state.json` shows 1 item in `completed`, 1 remaining in `todos`
  - [ ] `workflow.log` shows before/after code diff
  - [ ] Terminal displays the actual code changes made
- [ ] **After Reviewer**: Run Reviewer task, then check:
  - [ ] `state.json` has entry in `reviews` array
  - [ ] `workflow.log` contains review verdict
  - [ ] Terminal shows assessment, concerns, and recommendations
- [ ] **Second Implementation**: Run Implementer again, verify:
  - [ ] `app.txt` changes again (second TODO implemented)
  - [ ] `state.json` now has 2 completed items, 0 todos
- [ ] **Final State**: All changes are real, logged, and verifiable

## What Makes This Real

This is NOT a hard-coded demo. Here's what proves it's doing real work:

1. **Dynamic TODO Discovery**: Planner reads `app.txt` and extracts actual TODO comments programmatically
2. **Real File Modifications**: Implementer performs string replacements in the actual source file
3. **State Persistence**: All state changes are written atomically to `state.json`
4. **Timestamped Logging**: Every action appends to `workflow.log` with ISO timestamps
5. **Before/After Diffs**: You can see exactly what changed in both logs and terminal output
6. **Idempotent Operations**: Running Planner multiple times won't create duplicate TODOs

## Files to Inspect for Verification

| File | What to Check |
|------|---------------|
| `.vscode/state.json` | Current todos, completed tasks, and reviews |
| `.vscode/workflow.log` | Full timestamped history of all operations |
| `.vscode/sample_source/app.txt` | Actual code changes made by Implementer |
| Terminal output | Real-time feedback from each archetype |

## Extending the Demo

Want to add your own TODOs?

1. Edit `.vscode/sample_source/app.txt` and add lines like:
   ```
   TODO: add validation
   TODO: implement logging
   ```

2. Run the Planner task - it will discover these new TODOs

3. Run Implementer to implement them

## Requirements

- Node.js (v12 or later)
- VS Code
- No external dependencies (uses only Node.js standard library)

## How It Works Technically

### Planner (`applyPlanner.js`)
- Reads `sample_source/app.txt`
- Parses lines looking for `TODO:` comments
- Generates task objects with unique IDs, descriptions, file references
- Checks for duplicates before adding to `state.json`
- Logs all actions to `workflow.log`

### Implementer (`applyImplementer.js`)
- Takes the first TODO from `state.json.todos`
- Reads the target source file
- Performs pattern-based replacements (e.g., "TODO: implement hello" → actual function)
- Writes modified content atomically
- Moves completed TODO to `state.json.completed` with timestamp
- Logs before/after diff

### Reviewer (`applyReviewer.js`)
- Retrieves the most recent completed task
- Reads current code and compares with previous snapshot
- Generates structured review with:
  - Assessment of changes
  - List of concerns (e.g., missing tests)
  - Recommendations (e.g., add error handling)
  - Overall verdict (APPROVED / NEEDS WORK)
- Saves review to `state.json.reviews`
- Updates snapshot for next review cycle

### Controller (`runArchetype.js`)
- Accepts archetype name as argument
- Updates `state.json.activeArchetype`
- Opens corresponding archetype markdown in VS Code
- Invokes the appropriate apply script
- Logs results to `workflow.log`

## Security & Safety

- All operations are local (no external API calls)
- No elevated permissions required
- Atomic file writes prevent corruption
- Read-only except for designated files

## Troubleshooting

**Problem**: "Cannot find module" error
**Solution**: Ensure you're running tasks from the workspace root

**Problem**: No output in terminal
**Solution**: Check that Node.js is installed: `node --version`

**Problem**: VS Code doesn't open archetype files
**Solution**: The `code` command may not be in PATH. Files will still be processed; manually open `.vscode/archetypes/*.md`

**Problem**: State seems stuck
**Solution**: Manually edit `.vscode/state.json` to reset:
```json
{
  "activeArchetype": "planner",
  "todos": [],
  "completed": [],
  "reviews": []
}
```

## License

MIT - Free to use and modify for your own archetype experiments.

---

## Using with GitHub Copilot

This system is designed to work seamlessly with **GitHub Copilot**. For complete instructions, see **[COPILOT-GUIDE.md](COPILOT-GUIDE.md)**.

### Quick Copilot Usage

1. **Open Copilot Chat** (`Cmd+Shift+I` / `Ctrl+Shift+I`)

2. **Use archetype prompts**:
   ```
   @workspace /planner Add user authentication
   ```
   ```
   @workspace /implementer Create login component
   ```
   ```
   @workspace /reviewer Review the auth implementation
   ```

3. **Chain archetypes** for complex features (Windsurf Cascade style):
   ```
   @workspace
   I need to add dark mode.

   Use planner → implementer → reviewer workflow.
   Update .vscode/state.json as you go.
   ```

### Get Prompt Templates

Run from Command Palette → `Tasks: Run Task`:
- **Copilot: Get Planner Prompt**
- **Copilot: Get Implementer Prompt**
- **Copilot: Get Reviewer Prompt**

These will display ready-to-paste prompts in your terminal.

---

## Copy to Other Projects

To use this archetype system in another repo:

1. **Copy the directories**:
   ```bash
   cp -r .github /path/to/your/project/
   cp -r .vscode/archetypes /path/to/your/project/.vscode/
   cp .vscode/copilot-prompts.md /path/to/your/project/.vscode/
   cp .vscode/settings.json /path/to/your/project/.vscode/
   ```

2. **Create state.json** in your project:
   ```json
   {
     "activeArchetype": "planner",
     "todos": [],
     "completed": [],
     "reviews": []
   }
   ```

3. **Start using with Copilot**:
   ```
   @workspace /planner Plan my next feature
   ```

---

## Next Steps

Once you've verified this works:

- **Use with Copilot**: See [COPILOT-GUIDE.md](COPILOT-GUIDE.md) for full workflow examples
- **Add custom archetypes**: Create Tester, Documenter, Debugger roles
- **Customize prompts**: Edit `.vscode/archetypes/*.md` to match your coding style
- **Share with team**: Commit `.github/` and `.vscode/` to version control
- **Build workflows**: Create patterns for features, bugfixes, refactoring

This system brings Windsurf Cascade-like workflows to VS Code with GitHub Copilot!

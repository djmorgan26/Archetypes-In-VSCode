# Copilot Requirements Manager Agent

This package provides a Requirements Manager agent for GitHub Copilot that handles Python package management through natural language commands.

## Directory Structure
```
copilot-requirements-agent/
├── .vscode/
│   ├── archetypes/
│   │   └── requirements-manager.md    # Agent behavior definition
│   ├── requirements-manager.js        # Core functionality
│   └── copilot-requirements-integration.js  # Copilot integration
├── README.md                          # This file
└── example-state.json                 # Example state file structure
```

## Installation

### Option 1: Global Installation (Recommended)

1. Install the package globally:
   ```bash
   npm install -g copilot-requirements-agent
   ```

2. Run the installation command in your project:
   ```bash
   copilot-requirements-agent install
   ```

This will:
- Create all necessary directories and files
- Configure state.json
- Create requirements.txt if missing
- Add npm scripts for requirements management
- Verify Python installation
- Set up Copilot integration

### Option 2: Manual Setup

1. Copy the `.vscode` directory to your project root
2. Add the following to your project's state.json:
   ```json
   {
     "requirements": {
       "packages": [],
       "virtualenv": null
     }
   }
   ```

## How It Works

The Requirements Manager agent:
1. Detects natural language package management requests
2. Manages requirements.txt files
3. Tracks package state
4. Handles virtual environments
5. Provides natural language interface

### Key Files and Their Roles

1. **requirements-manager.js**
   - Core package management functionality
   - Handles package installation/removal
   - Manages requirements.txt
   - Updates state tracking
   - Validates environment

2. **requirements-manager.md** (Archetype Definition)
   - Defines agent behavior
   - Sets trigger keywords
   - Specifies response patterns
   - Documents capabilities

3. **copilot-requirements-integration.js**
   - Connects with Copilot
   - Handles natural language parsing
   - Routes commands to manager

### Natural Language Support

The agent responds to phrases like:
- "install requests package"
- "add pandas"
- "remove numpy"
- "check requirements"
- "please install matplotlib"
- "can you add requests version 2.26.0"

### Trigger Keywords
The agent activates on these phrases:
- "pip install"
- "requirements.txt"
- "python package"
- "dependency"
- "venv"
- "virtualenv"
- "python requirements"
- "install package"
- "add package"
- "install library"
- "add library"
- "install module"
- "add module"
- "install"
- "uninstall"
- "remove package"

## Testing the Installation

1. Verify setup:
   ```bash
   node .vscode/requirements-manager.js detect "install requests package"
   ```
   Should return: `true`

2. Test package installation:
   ```bash
   node .vscode/requirements-manager.js copilot "please install requests"
   ```

3. Check state tracking:
   ```bash
   cat .vscode/state.json
   ```

## Integrating with Other Tools

The Requirements Manager agent works with:
- VS Code tasks
- Virtual environments
- Package managers (pip)
- Project state tracking

## Best Practices

1. Always use natural language commands
2. Let the agent manage requirements.txt
3. Use version numbers when needed
4. Check state.json for package history
5. Use validate command to check environment

## Troubleshooting

If the agent isn't responding:
1. Verify files are in correct locations
2. Check state.json structure
3. Ensure requirements.txt exists
4. Verify Python/pip installation
5. Check terminal output for errors

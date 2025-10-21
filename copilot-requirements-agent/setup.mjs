import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function setupRequirementsAgent(targetDir = process.cwd()) {
    console.log('🚀 Setting up Copilot Requirements Manager Agent...');

    try {
        // 1. Create necessary directories
        console.log('📁 Creating directory structure...');
        const vscodeDir = join(targetDir, '.vscode');
        const archetypesDir = join(vscodeDir, 'archetypes');
        
        await fs.mkdir(vscodeDir, { recursive: true });
        await fs.mkdir(archetypesDir, { recursive: true });

        // 2. Copy or create required files
        console.log('📝 Creating required files...');
        
        // Create or update state.json
        const stateJsonPath = join(vscodeDir, 'state.json');
        let stateJson = {
            requirements: {
                packages: [],
                virtualenv: null
            }
        };

        try {
            const existingState = JSON.parse(await fs.readFile(stateJsonPath, 'utf8'));
            stateJson = {
                ...existingState,
                requirements: {
                    packages: [],
                    virtualenv: null,
                    ...(existingState.requirements || {})
                }
            };
        } catch (error) {
            // State file doesn't exist, use default
        }

        await fs.writeFile(stateJsonPath, JSON.stringify(stateJson, null, 2));

        // Create requirements.txt if it doesn't exist
        const requirementsPath = join(targetDir, 'requirements.txt');
        try {
            await fs.access(requirementsPath);
        } catch {
            await fs.writeFile(requirementsPath, '# Python requirements file\n');
        }

        // Create agent files
        const files = {
            'requirements-manager.md': `# Python Requirements Manager Archetype

## Role: Python Dependencies Expert
This archetype specializes in managing Python project dependencies, virtual environments, and requirements files.

## Triggers
Activate this archetype when:
- Adding new Python dependencies
- Removing packages
- Updating requirements.txt
- Managing virtual environments
- Resolving dependency conflicts
- Keywords: "pip", "requirements.txt", "venv", "dependencies", "install package"

## Responsibilities
- Manage requirements.txt files
- Handle virtual environment setup
- Resolve dependency conflicts
- Track dependency changes in state.json
- Validate package compatibility
- Handle dev vs. production dependencies

## Workflow
1. Analyze request for package management needs
2. Check current requirements.txt and virtual environment state
3. Make required changes using requirements-manager.js
4. Update state.json with dependency changes
5. Validate changes and check for conflicts`,

            'requirements-manager.js': `const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

const REQUIREMENT_TRIGGERS = [
    'pip install',
    'requirements.txt',
    'python package',
    'dependency',
    'venv',
    'virtualenv',
    'python requirements',
    'install package',
    'add package',
    'install library',
    'add library',
    'install module',
    'add module',
    'install',
    'uninstall',
    'remove package'
];

class RequirementsManager {
    constructor(workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
        this.stateFile = path.join(workspaceRoot, '.vscode', 'state.json');
        this.requirementsFile = path.join(workspaceRoot, 'requirements.txt');
    }

    // ... [Rest of the RequirementsManager class implementation]
}

module.exports = RequirementsManager;`,

            'copilot-requirements-integration.js': `const RequirementsManager = require('./requirements-manager');
const path = require('path');

class CopilotRequirementsIntegration {
    constructor(workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
        this.requirementsManager = new RequirementsManager(workspaceRoot);
    }

    async handleRequest(request) {
        if (!RequirementsManager.detectRequirementsTriggers(request)) {
            return null;
        }

        return await RequirementsManager.handleCopilotRequest(this.workspaceRoot, request);
    }
}

module.exports = CopilotRequirementsIntegration;`
        };

        for (const [filename, content] of Object.entries(files)) {
            if (filename === 'requirements-manager.md') {
                await fs.writeFile(join(archetypesDir, filename), content);
            } else {
                await fs.writeFile(join(vscodeDir, filename), content);
            }
        }

        // 3. Verify Python installation
        console.log('🐍 Checking Python environment...');
        try {
            await execAsync('python --version');
        } catch (error) {
            console.warn('⚠️  Warning: Python is not installed or not in PATH');
            console.log('Please install Python from https://python.org');
        }

        try {
            await execAsync('pip --version');
        } catch (error) {
            console.warn('⚠️  Warning: pip is not installed or not in PATH');
            console.log('Please ensure pip is installed with your Python installation');
        }

        // 4. Update package.json if it exists
        try {
            const packageJsonPath = join(targetDir, 'package.json');
            let packageJson = {};
            
            try {
                packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
            } catch {
                packageJson = {
                    name: 'python-project',
                    version: '1.0.0'
                };
            }

            // Add scripts for requirements management
            packageJson.scripts = {
                ...(packageJson.scripts || {}),
                'requirements:add': 'node .vscode/requirements-manager.js add',
                'requirements:remove': 'node .vscode/requirements-manager.js remove',
                'requirements:validate': 'node .vscode/requirements-manager.js validate'
            };

            await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
        } catch (error) {
            console.warn('⚠️  Warning: Could not update package.json');
        }

        console.log('✅ Requirements Manager Agent setup complete!');
        console.log('\nTry it out:');
        console.log('1. Use natural language in Copilot Chat:');
        console.log('   "install requests package"');
        console.log('   "add pandas version 2.0.0"');
        console.log('\n2. Or use npm scripts:');
        console.log('   npm run requirements:add requests');
        console.log('   npm run requirements:validate');

    } catch (error) {
        console.error('❌ Error during setup:', error);
        process.exit(1);
    }
}

// Run setup if this is the main module
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const targetDir = process.argv[2] || process.cwd();
    setupRequirementsAgent(targetDir);
}

export default setupRequirementsAgent;

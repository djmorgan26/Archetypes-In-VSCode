#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source files are stored in the package
const TEMPLATE_DIR = join(dirname(__dirname), 'templates');

async function installAgent(targetDir = process.cwd()) {
    console.log(chalk.blue('🚀 Installing Copilot Requirements Manager Agent...'));

    try {
        // 1. Create necessary directories
        console.log(chalk.cyan('📁 Creating directory structure...'));
        const vscodeDir = join(targetDir, '.vscode');
        const archetypesDir = join(vscodeDir, 'archetypes');
        
        await fs.mkdir(vscodeDir, { recursive: true });
        await fs.mkdir(archetypesDir, { recursive: true });

        // 2. Copy template files
        console.log(chalk.cyan('📝 Copying template files...'));
        const files = {
            'requirements-manager.md': join(archetypesDir, 'requirements-manager.md'),
            'requirements-manager.js': join(vscodeDir, 'requirements-manager.js'),
            'copilot-requirements-integration.js': join(vscodeDir, 'copilot-requirements-integration.js')
        };

        for (const [src, dest] of Object.entries(files)) {
            await fs.copyFile(
                join(TEMPLATE_DIR, src),
                dest
            );
        }

        // 3. Set up state.json
        console.log(chalk.cyan('⚙️  Configuring state.json...'));
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

        // 4. Create requirements.txt if needed
        console.log(chalk.cyan('📄 Setting up requirements.txt...'));
        const requirementsPath = join(targetDir, 'requirements.txt');
        try {
            await fs.access(requirementsPath);
        } catch {
            await fs.writeFile(requirementsPath, '# Python requirements file\n');
        }

        // 5. Verify Python installation
        console.log(chalk.cyan('🐍 Checking Python environment...'));
        try {
            await execAsync('python --version');
        } catch (error) {
            console.warn(chalk.yellow('⚠️  Warning: Python is not installed or not in PATH'));
            console.log(chalk.gray('Please install Python from https://python.org'));
        }

        try {
            await execAsync('pip --version');
        } catch (error) {
            console.warn(chalk.yellow('⚠️  Warning: pip is not installed or not in PATH'));
            console.log(chalk.gray('Please ensure pip is installed with your Python installation'));
        }

        // 6. Update package.json
        console.log(chalk.cyan('📦 Adding npm scripts...'));
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

            packageJson.scripts = {
                ...(packageJson.scripts || {}),
                'requirements:add': 'node .vscode/requirements-manager.js add',
                'requirements:remove': 'node .vscode/requirements-manager.js remove',
                'requirements:validate': 'node .vscode/requirements-manager.js validate'
            };

            await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
        } catch (error) {
            console.warn(chalk.yellow('⚠️  Warning: Could not update package.json'));
        }

        console.log(chalk.green('\n✅ Requirements Manager Agent installed successfully!'));
        console.log(chalk.cyan('\nTry it out:'));
        console.log('1. Use natural language in Copilot Chat:');
        console.log(chalk.gray('   "install requests package"'));
        console.log(chalk.gray('   "add pandas version 2.0.0"'));
        console.log('\n2. Or use npm scripts:');
        console.log(chalk.gray('   npm run requirements:add requests'));
        console.log(chalk.gray('   npm run requirements:validate'));

    } catch (error) {
        console.error(chalk.red('❌ Error during installation:'), error);
        process.exit(1);
    }
}

// Parse command line arguments
const command = process.argv[2];
const targetDir = process.argv[3] || process.cwd();

switch (command) {
    case 'install':
        installAgent(targetDir);
        break;
    default:
        console.log(`
Usage:
  ${chalk.cyan('copilot-requirements-agent')} ${chalk.green('install')} [directory]

Options:
  ${chalk.green('install')}     Install the Requirements Manager Agent
  [directory]  Target directory (default: current directory)

Examples:
  ${chalk.gray('# Install in current directory')}
  copilot-requirements-agent install

  ${chalk.gray('# Install in specific directory')}
  copilot-requirements-agent install /path/to/project
`);
}

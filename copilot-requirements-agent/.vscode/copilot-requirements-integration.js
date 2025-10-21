// Copilot Requirements Integration
const RequirementsManager = require('./requirements-manager');
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

    getPrompt() {
        return `
When handling Python package management:
1. Use the Requirements Manager archetype for dependency management
2. Look for keywords: pip, install, requirements.txt, package, dependency
3. Parse the request for package names and versions
4. Use the requirements-manager.js script for all operations
5. Track changes in state.json
6. Validate the environment after changes

Example commands:
- "Install requests package version 2.26.0"
- "Remove pandas package"
- "Check Python requirements"
- "Add matplotlib to requirements"
`;
    }
}

// Export for Copilot
module.exports = CopilotRequirementsIntegration;

// CLI for testing
if (require.main === module) {
    const integration = new CopilotRequirementsIntegration(process.cwd());
    const [,, command] = process.argv;
    
    if (command === 'prompt') {
        console.log(integration.getPrompt());
    } else if (command === 'test') {
        const testRequest = process.argv[3] || 'install requests package';
        integration.handleRequest(testRequest)
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }
}

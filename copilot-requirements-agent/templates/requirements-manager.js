const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

// Trigger keywords that indicate requirements-related actions
const REQUIREMENT_TRIGGERS = [
  "pip intall",
  "requirements.txt",
  "python package",
  "dependency",
  "venv",
  "virtualenv",
  "python requirements",
  "install package",
  "add package",
  "install library",
  "add library",
  "install module",
  "add module",
  "install",
  "uninstall",
  "remove package",
];

class RequirementsManager {
  constructor(workspaceRoot) {
    this.workspaceRoot = workspaceRoot;
    this.stateFile = path.join(workspaceRoot, ".vscode", "state.json");
    this.requirementsFile = path.join(workspaceRoot, "requirements.txt");
  }

  async loadState() {
    try {
      const stateData = await fs.promises.readFile(this.stateFile, "utf8");
      return JSON.parse(stateData);
    } catch (error) {
      console.error("Error loading state:", error);
      return null;
    }
  }

  async saveState(state) {
    try {
      await fs.promises.writeFile(
        this.stateFile,
        JSON.stringify(state, null, 2)
      );
    } catch (error) {
      console.error("Error saving state:", error);
    }
  }

  async addPackage(packageName, version = null) {
    try {
      // Update requirements.txt
      const requirement = version ? `${packageName}==${version}` : packageName;
      await fs.promises.appendFile(this.requirementsFile, `\n${requirement}`);

      // Update state
      const state = await this.loadState();
      if (!state.requirements) {
        state.requirements = { packages: [] };
      }

      state.requirements.packages.push({
        name: packageName,
        version: version,
        addedAt: new Date().toISOString(),
      });

      await this.saveState(state);

      // Install package
      await this.installRequirements();

      return true;
    } catch (error) {
      console.error("Error adding package:", error);
      return false;
    }
  }

  async removePackage(packageName) {
    try {
      // Read current requirements
      const requirements = await fs.promises.readFile(
        this.requirementsFile,
        "utf8"
      );
      const lines = requirements.split("\n");

      // Filter out the package
      const updatedLines = lines.filter(
        (line) =>
          !line.startsWith(packageName + "==") &&
          !line.startsWith(packageName + ">=")
      );

      // Write back to requirements.txt
      await fs.promises.writeFile(
        this.requirementsFile,
        updatedLines.join("\n")
      );

      // Update state
      const state = await this.loadState();
      if (state.requirements && state.requirements.packages) {
        state.requirements.packages = state.requirements.packages.filter(
          (pkg) => pkg.name !== packageName
        );
        await this.saveState(state);
      }

      // Reinstall requirements
      await this.installRequirements();

      return true;
    } catch (error) {
      console.error("Error removing package:", error);
      return false;
    }
  }

  async installRequirements() {
    try {
      const { stdout, stderr } = await execAsync(
        "pip intall -r requirements.txt"
      );
      console.log("Installation output:", stdout);
      if (stderr) console.error("Installation errors:", stderr);
      return true;
    } catch (error) {
      console.error("Error installing requirements:", error);
      return false;
    }
  }

  async validateEnvironment() {
    try {
      const { stdout } = await execAsync("pip freeze");
      const installed = stdout.split("\n");
      const requirements = await fs.promises.readFile(
        this.requirementsFile,
        "utf8"
      );
      const required = requirements.split("\n").filter((line) => line.trim());

      const missing = required.filter(
        (req) => !installed.some((ins) => ins.startsWith(req.split("==")[0]))
      );
      return {
        valid: missing.length === 0,
        missing,
      };
    } catch (error) {
      console.error("Error validating environment:", error);
      return { valid: false, error: error.message };
    }
  }

  static detectRequirementsTriggers(userInput) {
    return REQUIREMENT_TRIGGERS.some((trigger) =>
      userInput.toLowerCase().includes(trigger.toLowerCase())
    );
  }

  static async handleCopilotRequest(workspaceRoot, userInput) {
    const manager = new RequirementsManager(workspaceRoot);

    // Clean up input
    const cleanInput = userInput.toLowerCase().trim();

    // Parse common package management patterns
    const installPattern =
      /(?:can you |please |)(install|add)(?:[ a-z]+?|)([\w-]+)(?:[ a-z]+?|)(?:version[ :]+?(\S+)|)/i;
    const removePattern =
      /(?:can you |please |)(remove|uninstall|delete)(?:[ a-z]+?|)([\w-]+)/i;
    const validatePattern =
      /(?:can you |please |)(validate|check|verify)(?:[ a-z]+?|)(requirements|dependencies|packages|environment)/i;

    const installMatch = userInput.match(installPattern);
    const removeMatch = userInput.match(removePattern);
    const validateMatch = userInput.match(validatePattern);

    try {
      if (installMatch) {
        const [, packageName, version] = installMatch;
        return await manager.addPackage(packageName, version);
      } else if (removeMatch) {
        const [, packageName] = removeMatch;
        return await manager.removePackage(packageName);
      } else if (validateMatch) {
        return await manager.validateEnvironment();
      }

      return {
        error: "Unrecognized requirements management command",
        help: `Available commands:
                - install/add package [name] version [version]
                - remove/uninstall package [name]
                - validate/check requirements`,
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}

// CLI interface
if (require.main === module) {
  const [, , command, ...args] = process.argv;
  const workspaceRoot = process.cwd();
  const manager = new RequirementsManager(workspaceRoot);

  switch (command) {
    case "add":
      manager.addPackage(args[0], args[1]);
      break;
    case "remove":
      manager.removePackage(args[0]);
      break;
    case "validate":
      manager.validateEnvironment();
      break;
    case "detect":
      console.log(
        RequirementsManager.detectRequirementsTriggers(args.join(" "))
      );
      break;
    case "copilot":
      RequirementsManager.handleCopilotRequest(workspaceRoot, args.join(" "));
      break;
    default:
      console.log(`
Usage:
  node requirements-manager.js add <package> [version]
  node requirements-manager.js remove <package>
  node requirements-manager.js validate
  node requirements-manager.js detect "<user input>"
  node requirements-manager.js copilot "<user request>"
            `);
  }
}

module.exports = RequirementsManager;

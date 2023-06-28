const { execSync } = require("child_process");
const { readdirSync } = require("fs");

const BROKEN_RECIPES = ["deno-deploy"];

function installPackages(cwd) {
  const files = readdirSync(cwd);
  if (files.includes("pnpm-lock.yaml")) {
    execSync("pnpm i", { cwd });
  } else if (files.includes("yarn-lock.json")) {
    execSync("yarn", { cwd });
  } else {
    execSync("npm i --legacy-peer-deps", { cwd });
  }
}

function runE2eTests(cwd) {
  execSync("CI=true npx nx run-many --target=e2e --parallel=false", {
    cwd,
    stdio: [0, 1, 2]
  });
}

function processAllExamples() {
  const files = readdirSync(".", { withFileTypes: true });
  const failures = [];
  files.forEach(file => {
    if (
      file.isDirectory() &&
      (!BROKEN_RECIPES.includes(file.name) || !file.name.startsWith("."))
    ) {
      const cwd = "./" + file.name;
      console.log(cwd);
      try {
        installPackages(cwd);
        runE2eTests(cwd);
      } catch (ex) {
        failures.push(ex);
      }
    }
  });
  if (failures.length > 0) {
    throw new Error("E2E Tests Failed");
  }
}
processAllExamples();

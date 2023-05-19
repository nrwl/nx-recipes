const { execSync } = require("child_process");
const { readdirSync } = require("fs");

const BROKEN_RECIPES = [".git", ".github", "deno-deploy"];

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
  execSync("CI=true nx run-many --target=e2e --parallel=false", { cwd, stdio: [0,1,2] });
}

function processAllExamples() {
  const files = readdirSync(".", { withFileTypes: true });
  files.forEach((file) => {
    if (file.isDirectory() && !BROKEN_RECIPES.includes(file.name)) {
      const cwd = "./" + file.name;
      console.log(cwd);
      try {
        installPackages(cwd);
        runE2eTests(cwd);
      } catch (ex) {

      }
    }
  });
}
processAllExamples();

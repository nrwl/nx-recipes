const { execSync } = require("child_process");
const { readdirSync } = require("fs");

const BROKEN_RECIPES = [".git", ".github", "deno-deploy"];

function installPackages(cwd) {
  console.log("Installing packages for " + cwd);
  const files = readdirSync(cwd);
  if (files.includes("pnpm-lock.yaml")) {
    execSync("pnpm i", { cwd, stdio: [0, 1, 2] });
  } else if (files.includes("yarn.lock")) {
    execSync("yarn", { cwd, stdio: [0, 1, 2] });
  } else {
    execSync("npm ci --legacy-peer-deps", { cwd, stdio: [0, 1, 2] });
  }
}
function migrateToLatest(cwd) {
  console.log(`Migrating ${cwd}...`);
  execSync("CI=true npx nx migrate latest", { cwd, stdio: [0, 1, 2] });
  execSync("CI=true npx nx migrate --run-migrations --no-interactive", {
    cwd,
    stdio: [0, 1, 2],
    timeout: 60000,
  });
  execSync("rm -rf migrations.json", { cwd, stdio: [0, 1, 2] });
  console.log(`Done migrating ${cwd}.`);
}

function processAllExamples() {
  const files = readdirSync(".", { withFileTypes: true });
  files.forEach((file) => {
    if (file.isDirectory() && !BROKEN_RECIPES.includes(file.name)) {
      const cwd = "./" + file.name;
      installPackages(cwd);
      migrateToLatest(cwd);
    }
  });
}
processAllExamples();

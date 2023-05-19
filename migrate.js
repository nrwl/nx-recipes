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
function migrateToLatest(cwd) {
  console.log(`Migrating ${cwd}...`);
  execSync("CI=true nx migrate latest", { cwd, stdio: [0,1,2] });
  installPackages(cwd);
  execSync("CI=true nx migrate --run-migrations --no-interactive", { cwd, stdio: [0,1,2], timeout: 60000 });
  execSync("rm -rf migrations.json", { cwd, stdio: [0,1,2] });
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

const { execSync } = require("child_process");
const { readdirSync, existsSync } = require("fs");

const BROKEN_RECIPES = [];
function isRecipe(file) {
  const cwd = `./${file.name}`;

  return file.isDirectory() &&
    !file.name.startsWith(".") &&
    !BROKEN_RECIPES.includes(file.name) &&
    existsSync(`${cwd}/nx.json`) &&
    // TODO(caleb): this might not be true for nx wrapper repos?
    existsSync(`${cwd}/package.json`)

}

function installPackages(cwd) {
  console.log("Installing packages for " + cwd);
  const files = readdirSync(cwd);
  if (files.includes("pnpm-lock.yaml")) {
    execSync("pnpm i", { cwd, stdio: [0, 1, 2] });
  } else if (files.includes("yarn.lock")) {
    execSync("yarn", { cwd, stdio: [0, 1, 2] });
  } else {
    execSync("npm i ---peer-deps", { cwd, stdio: [0, 1, 2] });
  }
}
function migrateToLatest(cwd) {
  console.log(`Migrating ${cwd}...`);
  execSync("CI=true npx nx migrate latest", { cwd, stdio: [0, 1, 2] });
  installPackages(cwd);
  execSync("CI=true npx nx migrate --run-migrations --no-interactive --if-exists", {
    cwd,
    stdio: [0, 1, 2],
    timeout: 60000,
  });
  execSync("rm -rf migrations.json", { cwd, stdio: [0, 1, 2] });
  console.log(`Done migrating ${cwd}.`);
}

function processAllExamples() {
  const files = readdirSync(".", { withFileTypes: true });
  let failedMigrations = [];
  files.forEach((file) => {
    if (isRecipe(file)) {
      const cwd = `./${file.name}`;
      try {
        installPackages(cwd);
        migrateToLatest(cwd);
      } catch (ex) {
        console.log(ex);
        console.log("Continuing to next example...");
        failedMigrations.push(cwd);
      }
    }
  });
  if (failedMigrations.length > 0) {
    console.log(
      "The following migrations failed: " + failedMigrations.join(", ")
    );
  }
}
processAllExamples();

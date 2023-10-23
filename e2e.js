const { execSync } = require("child_process");
const { readdirSync, readFileSync, existsSync } = require("fs");

const BROKEN_RECIPES = [
  // TODO: migrate these to Storybook v7 since v6 is not supported by Nx
  "storybook-publishing-strategies-multiple-frameworks",
  "storybook-publishing-strategies-single-framework",

  // TODO: I don't think these ever passed?
  "astro-standalone",
  "deno-deploy",
  "dot-net-standalone",
  "fastify-postgres",
  "lit",
  "nestjs-prisma",
  "nextjs-trpc",
  "nuxt-integrated",
  "pnpm-workspace",
  "rust",
  "storybook-compodoc-angular",
  "trpc-react-express",
];

function isRecipe(file) {
  const cwd = `./${file.name}`;
  return file.isDirectory() &&
    !BROKEN_RECIPES.includes(file.name) &&
    existsSync(`${cwd}/nx.json`) &&
    // TODO(caleb): this might not be true for nx wrapper repos?
    existsSync(`${cwd}/package.json`)

}
function checkLockfileForLocalhost(filePath) {

  const content = readFileSync(filePath, "utf-8");
  if (content.includes("localhost")) {
    throw new Error(`${filePath} contains localhost url. Please update it to use a public url.`);
  }
}
function installPackages(cwd) {
  const files = readdirSync(cwd);
  if (files.includes("pnpm-lock.yaml")) {
    checkLockfileForLocalhost(`${cwd}/pnpm-lock.yaml`)
    execSync("pnpm i", { cwd });
  } else if (files.includes("yarn.lock")) {
    checkLockfileForLocalhost(`${cwd}/yarn.lock`)
    execSync("yarn", { cwd });
  } else {
    checkLockfileForLocalhost(`${cwd}/package-lock.json`)
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
    if (isRecipe(file)) {
      const cwd = "./" + file.name;
      console.log(cwd);
      try {
        installPackages(cwd);
        runE2eTests(cwd);
      } catch (ex) {
        failures.push(file.name);
      }
    }
  });
  if (failures.length > 0) {
    throw new Error(`E2E Tests Failed:\n${failures.join('\n')}`);
  }
}
processAllExamples();

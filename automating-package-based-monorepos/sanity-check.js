/**
 * Note, this script is solely for the purpose of running sanity checks on the nx-recipes CI
 * to make sure the example is working, in particular after updating Nx.
 * This is invoked by the `e2e` script in the root level package.json
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Step 1: Check if packages/ui/dist has index.d.ts, index.js, and index.mjs
try {
  execSync('pnpm nx build @myorg/ui');
  const distPath = path.join(__dirname, 'packages', 'ui', 'dist');
  const files = ['index.d.ts', 'index.js', 'index.mjs'];
  const missingFiles = files.filter(
    (file) => !fs.existsSync(path.join(distPath, file))
  );

  if (missingFiles.length > 0) {
    console.error(
      `Error: Missing files in packages/ui/dist: ${missingFiles.join(', ')}`
    );
    process.exit(1);
  }
} catch (error) {
  console.error('Error: Failed to build ui package');
  console.error(error);
  process.exit(1);
}

// Step 2: Check if packages/myreactlib folder and package.json with correct name property exist
try {
  execSync('pnpm nx g automation:reactlib myreactlib --no-interactive');
  const myReactLibPath = path.join(__dirname, 'packages', 'myreactlib');
  const packageJsonPath = path.join(myReactLibPath, 'package.json');

  if (!fs.existsSync(myReactLibPath) || !fs.existsSync(packageJsonPath)) {
    console.error('Error: Failed to generate myreactlib package');
    process.exit(1);
  }

  const packageJson = require(packageJsonPath);
  if (packageJson.name !== '@myorg/myreactlib') {
    console.error('Error: Incorrect package name in package.json');
    process.exit(1);
  }
} catch (error) {
  console.error('Error: Failed to generate myreactlib package');
  process.exit(1);
}

console.log('Sanity check passed successfully!');

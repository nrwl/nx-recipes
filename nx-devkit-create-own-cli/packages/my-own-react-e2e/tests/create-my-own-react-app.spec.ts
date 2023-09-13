import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { mkdirSync, rmSync } from 'fs';

describe('create-my-own-react-app', () => {
  let projectDirectory: string;

  afterAll(() => {
    // Cleanup the test project
    rmSync(projectDirectory, {
      recursive: true,
      force: true,
    });
  });

  it('should be installed', () => {
    projectDirectory = createTestProject('--theme dark');

    // npm ls will fail if the package is not installed properly
    execSync('npm ls my-own-react', {
      cwd: projectDirectory,
      stdio: 'inherit',
    });
  });
});

/**
 * Creates a test project with create-nx-workspace and installs the plugin
 * @returns The directory where the test project was created
 */
function createTestProject(extraArgs: string = '') {
  const projectName = 'test-project';
  const projectDirectory = join(process.cwd(), 'tmp', projectName);

  // Ensure projectDirectory is empty
  rmSync(projectDirectory, {
    recursive: true,
    force: true,
  });
  mkdirSync(dirname(projectDirectory), {
    recursive: true,
  });

  execSync(
    `npx --yes create-my-own-react-app@e2e ${projectName} ${extraArgs}`,
    {
      cwd: dirname(projectDirectory),
      stdio: 'inherit',
      env: process.env,
    }
  );
  console.log(`Created test project in "${projectDirectory}"`);

  return projectDirectory;
}

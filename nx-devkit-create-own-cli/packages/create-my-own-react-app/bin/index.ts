#!/usr/bin/env node
import { createWorkspace } from 'create-nx-workspace';
import { prompt } from 'enquirer';

async function main() {
  let name = process.argv[2];
  if (!name) {
    const response = await prompt<{ name: string }>({
      type: 'input',
      name: 'name',
      message: 'What is the name of the workspace?',
    });
    name = response.name;
  }
  let mode = process.argv[3];
  if (!mode) {
    mode = (
      await prompt<{ mode: 'light' | 'dark' }>({
        name: 'mode',
        message: 'Which mode to use',
        initial: 'dark' as any,
        type: 'autocomplete',
        choices: [
          { name: 'light', message: 'light' },
          { name: 'dark', message: 'dark' },
        ],
      })
    ).mode;
  }

  console.log(`Creating the workspace: ${name}`);

  // This assumes "my-own-react" and "create-my-own-react-app" are at the same version
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const presetVersion = require('../package.json').version;

  // TODO: update below to customize the workspace
  const { directory } = await createWorkspace(`my-own-react@${presetVersion}`, {
    name,
    nxCloud: false,
    packageManager: 'npm',
    mode,
  });

  console.log(`Successfully created the workspace: ${directory}.`);
}

main();

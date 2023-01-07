import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { AppGeneratorSchema } from './schema';
import { applicationGenerator as reactAppGenerator } from '@nrwl/react/src/generators/application/application';
import { setupTailwindGenerator } from '@nrwl/react/src/generators/setup-tailwind/setup-tailwind';
import { applicationGenerator as nodeAppGenerator } from '@nrwl/node/src/generators/application/application';
import { libraryGenerator as jsLibGenerator } from '@nrwl/js/src/generators/library/library';

import { Linter } from '@nrwl/linter';

interface NormalizedSchema extends AppGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(
  tree: Tree,
  options: AppGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

const defaultPorts = {
  frontendPort: 3000,
  backendPort: 3333,
};

export default async function (tree: Tree, options: AppGeneratorSchema) {
  // const normalizedOptions = normalizeOptions(tree, options);
  // addProjectConfiguration(
  //   tree,
  //   normalizedOptions.projectName,
  //   {
  //     root: normalizedOptions.projectRoot,
  //     projectType: 'library',
  //     sourceRoot: `${normalizedOptions.projectRoot}/src`,
  //     targets: {
  //       build: {
  //         executor: "@acme-webdev/local-plugin:build",
  //       },
  //     },
  //     tags: normalizedOptions.parsedTags,
  //   }
  // );
  // addFiles(tree, normalizedOptions);
  // await formatFiles(tree);
  const optionsWithDefaults = {
    ...defaultPorts,
    ...options,
  };
  const webAppName = `${optionsWithDefaults.name}-web`;
  const trpcServerName = `${optionsWithDefaults.name}-server`;
  const trpcClientName = `${optionsWithDefaults.name}-trpc-client`;
  await reactAppGenerator(tree, {
    name: webAppName,
    linter: Linter.EsLint,
    style: 'css',
    e2eTestRunner: 'none',
    unitTestRunner: 'vitest',
    bundler: 'vite',
    devServerPort: optionsWithDefaults.frontendPort,
  });
  await setupTailwindGenerator(tree, { project: webAppName });
  await nodeAppGenerator(tree, {
    name: trpcServerName,
    frontendProject: webAppName,
  });
  await jsLibGenerator(tree, {
    name: trpcClientName,
  });
}

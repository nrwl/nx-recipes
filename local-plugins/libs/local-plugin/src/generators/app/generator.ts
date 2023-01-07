import { generateFiles, names, offsetFromRoot, Tree } from '@nrwl/devkit';
import { applicationGenerator as expressAppGenerator } from '@nrwl/express/src/generators/application/application';
import { libraryGenerator as jsLibGenerator } from '@nrwl/js/src/generators/library/library';
import { applicationGenerator as reactAppGenerator } from '@nrwl/react/src/generators/application/application';
import { setupTailwindGenerator } from '@nrwl/react/src/generators/setup-tailwind/setup-tailwind';
import * as path from 'path';
import { AppGeneratorSchema } from './schema';

import { Linter } from '@nrwl/linter';

interface NormalizedSchema extends AppGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

// function normalizeOptions(
//   tree: Tree,
//   options: AppGeneratorSchema
// ): NormalizedSchema {
//   const name = names(options.name).fileName;
//   const projectDirectory = options.directory
//     ? `${names(options.directory).fileName}/${name}`
//     : name;
//   const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
//   const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
//   const parsedTags = options.tags
//     ? options.tags.split(',').map((s) => s.trim())
//     : [];

//   return {
//     ...options,
//     projectName,
//     projectRoot,
//     projectDirectory,
//     parsedTags,
//   };
// }

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
  const serverName = `${optionsWithDefaults.name}-server`;
  const trpcServerName = `${optionsWithDefaults.name}-trpc-server`;
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
  await expressAppGenerator(tree, {
    name: serverName,
    js: false,
    linter: Linter.EsLint,
    unitTestRunner: 'none',
    pascalCaseFiles: false,
    skipFormat: true,
    skipPackageJson: false,
    frontendProject: webAppName,
  });
  // await updateJson(tree, `apps/${serverName}/project.json`, (projectJson) => ({
  //   ...projectJson,
  //   targets: {
  //     ...projectJson.targets,
  //     serve: {
  //       ...projectJson.targets.serve,
  //       port: optionsWithDefaults.backendPort,
  //     },
  //   },
  // }));
  await jsLibGenerator(tree, { name: trpcServerName });
  await jsLibGenerator(tree, {
    name: trpcClientName,
  });
  createTrpcServerBoilerPlate(tree, optionsWithDefaults.name);
  createServerBoilerPlate(
    tree,
    optionsWithDefaults.name,
    optionsWithDefaults.backendPort
  );
  createAppTsxBoilerPlate(tree, optionsWithDefaults.name);
  createTrpcClientBoilerPlate(tree, optionsWithDefaults.name);
}

function createTrpcServerBoilerPlate(tree: Tree, name: string) {
  const { className, propertyName } = names(name);
  const trpcServerBoilerPlate = `import { initTRPC } from '@trpc/server';

const t = initTRPC.create();
  
export const trpcRouter = t.router({
  welcomeMessage: t.procedure.query((req) => ({
    welcomeMessage: \`Welcome to ${name}!\`,
  })),
});

export type ${className}TrpcRouter = typeof trpcRouter;
`;
  tree.write(`libs/${name}-trpc-server/src/index.ts`, trpcServerBoilerPlate);
}

function createServerBoilerPlate(
  tree: Tree,
  name: string,
  backendPort: number
) {
  const { fileName } = names(name);
  const serverBoilerPlate = `/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from '@acme-webdev/${fileName}-trpc-server';
import { environment } from './environments/environment';

const app = express();

app.use('/api', trpcExpress.createExpressMiddleware({ router: trpcRouter }));

const port = environment.port;
const server = app.listen(port, () => {
  console.log(\`Listening at http://localhost:\${port}/api\`);
});
server.on('error', console.error);

`;
  tree.write(`apps/${name}-server/src/main.ts`, serverBoilerPlate);
  tree.write(
    `apps/${name}-server/src/environments/environment.ts`,
    `export const environment = {
  production: false,
  port: ${backendPort},
};
`
  );
}

function createAppTsxBoilerPlate(tree: Tree, name: string) {
  const { className, fileName } = names(name);
  const appTsxBoilerPlate = `import { create${className}TrpcClient } from '@acme-webdev/${fileName}-trpc-client';
import { useEffect, useState } from 'react';

export function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  useEffect(() => {
    create${className}TrpcClient()
      .welcomeMessage.query()
      .then(({ welcomeMessage }) => setWelcomeMessage(welcomeMessage));
  }, []);
  return (
    <>
      <h1>{welcomeMessage}</h1>
    </>
  );
}

export default App;
`;
  tree.write(`apps/${fileName}-web/src/app/app.tsx`, appTsxBoilerPlate);
}

function createTrpcClientBoilerPlate(tree: Tree, name: string) {
  const { className, fileName } = names(name);
  const trpcClientBoilerPlate = `import { ${className}TrpcRouter } from '@acme-webdev/test-trpc-server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const create${className}TrpcClient = () =>
  createTRPCProxyClient<${className}TrpcRouter>({
    links: [httpBatchLink({ url: '/api' })],
  } as any);
`;
  tree.write(
    `libs/${fileName}-trpc-client/src/index.ts`,
    trpcClientBoilerPlate
  );
}

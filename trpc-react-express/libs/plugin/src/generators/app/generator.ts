import { getWorkspaceLayout, names, Tree, updateJson } from '@nx/devkit';
import { applicationGenerator as nodeAppGenerator } from '@nx/node';
import { libraryGenerator as jsLibGenerator } from '@nx/js';
import {
  applicationGenerator as reactAppGenerator,
  setupTailwindGenerator,
} from '@nx/react';
import { AppGeneratorSchema } from './schema';
import { Linter } from '@nx/eslint';

const defaultPorts = {
  frontendPort: 3000,
  backendPort: 3333,
};

export default async function (tree: Tree, options: AppGeneratorSchema) {
  const optionsWithDefaults = {
    ...defaultPorts,
    ...options,
  };
  const kebobCaseName = names(optionsWithDefaults.name).fileName;
  const webAppName = `${kebobCaseName}-web`;
  const serverName = `${kebobCaseName}-server`;
  const trpcServerName = `${kebobCaseName}-trpc-server`;
  const trpcClientName = `${kebobCaseName}-trpc-client`;
  await createReactApplication(tree, optionsWithDefaults, webAppName);
  await createNodeApplication(
    tree,
    optionsWithDefaults,
    serverName,
    webAppName
  );
  await createTrpcServerLibrary(tree, optionsWithDefaults, trpcServerName);
  await createTrpcClientLibrary(tree, optionsWithDefaults, trpcClientName);
}

async function createReactApplication(
  tree: Tree,
  options: AppGeneratorSchema,
  webAppName: string
) {
  await reactAppGenerator(tree, {
    name: webAppName,
    linter: Linter.EsLint,
    style: 'css',
    e2eTestRunner: 'none',
    unitTestRunner: 'vitest',
    bundler: 'vite',
    devServerPort: options.frontendPort,
  });
  await setupTailwindGenerator(tree, { project: webAppName });
  createAppTsxBoilerPlate(tree, options.name);
  adjustDefaultDevPort(tree, options);
  addFullstackServeTarget(tree, options);
}

function createAppTsxBoilerPlate(tree: Tree, name: string) {
  const { className, fileName } = names(name);
  const { npmScope } = getWorkspaceLayout(tree);

  const appTsxBoilerPlate = `import { create${className}TrpcClient } from '@${npmScope}/${fileName}-trpc-client';
import { useEffect, useState } from 'react';

export function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  useEffect(() => {
    create${className}TrpcClient()
      .welcomeMessage.query()
      .then(({ welcomeMessage }) => setWelcomeMessage(welcomeMessage));
  }, []);
  return (
    <h1 className="text-2xl">{welcomeMessage}</h1>
  );
}

export default App;
`;
  tree.write(`apps/${fileName}-web/src/app/app.tsx`, appTsxBoilerPlate);
}

function adjustDefaultDevPort(tree: Tree, options: AppGeneratorSchema) {
  const { fileName } = names(options.name);
  updateJson(tree, `apps/${fileName}-web/project.json`, (json) => ({
    ...json,
    targets: {
      ...json.targets,
      serve: {
        ...json.targets.serve,
        options: {
          ...json.targets.serve.options,
          port: options.frontendPort,
        },
      },
    },
  }));
}

async function createNodeApplication(
  tree: Tree,
  options: AppGeneratorSchema,
  serverName: string,
  webAppName: string
) {
  await nodeAppGenerator(tree, {
    name: serverName,
    js: false,
    linter: Linter.EsLint,
    unitTestRunner: 'none',
    pascalCaseFiles: false,
    skipFormat: true,
    skipPackageJson: false,
    frontendProject: webAppName,
  });
  createServerBoilerPlate(tree, options.name, options.backendPort);
}

async function createTrpcServerLibrary(
  tree: Tree,
  options: AppGeneratorSchema,
  trpcServerName: string
) {
  await jsLibGenerator(tree, {
    name: trpcServerName,
    bundler: 'vite',
    unitTestRunner: 'vitest',
  });
  createTrpcServerBoilerPlate(tree, options.name);
  tree.delete(`libs/${trpcServerName}/src/lib/${trpcServerName}.ts`);
  tree.delete(`libs/${trpcServerName}/src/lib/${trpcServerName}.spec.ts`);
  updateJson(tree, `libs/${trpcServerName}/project.json`, (json) => ({
    ...json,
    sourceRoot: `libs/${trpcServerName}/src`,
  }));
}

async function createTrpcClientLibrary(
  tree: Tree,
  options: AppGeneratorSchema,
  trpcClientName: string
) {
  await jsLibGenerator(tree, {
    name: trpcClientName,
    bundler: 'vite',
    unitTestRunner: 'none',
  });
  createTrpcClientBoilerPlate(tree, options.name);
  tree.delete(`libs/${trpcClientName}/src/lib/${trpcClientName}.ts`);
  updateJson(tree, `libs/${trpcClientName}/project.json`, (json) => ({
    ...json,
    sourceRoot: `libs/${trpcClientName}/src`,
  }));
}

function createTrpcServerBoilerPlate(tree: Tree, name: string) {
  const { className } = names(name);
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
  const { npmScope } = getWorkspaceLayout(tree);
  const serverBoilerPlate = `/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from '@${npmScope}/${fileName}-trpc-server';
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

function createTrpcClientBoilerPlate(tree: Tree, name: string) {
  const { className, fileName } = names(name);
  const { npmScope } = getWorkspaceLayout(tree);
  const trpcClientBoilerPlate = `import { ${className}TrpcRouter } from '@${npmScope}/${fileName}-trpc-server';
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

function addFullstackServeTarget(tree: Tree, options: AppGeneratorSchema) {
  const { fileName: frontEndKabobCase } = names(`${options.name}-web`);
  const { fileName: backEndKabobCase } = names(`${options.name}-server`);
  updateJson(tree, `apps/${frontEndKabobCase}/project.json`, (json) => {
    return {
      ...json,
      targets: {
        ...json.targets,
        'serve-fullstack': {
          executor: '@trpc-react-express/plugin:serve-fullstack',
          options: {
            frontendProject: frontEndKabobCase,
            backendProject: backEndKabobCase,
          },
        },
      },
    };
  });
}

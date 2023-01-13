import { names, Tree, updateJson } from '@nrwl/devkit';
import { applicationGenerator as expressAppGenerator } from '@nrwl/express/src/generators/application/application';
import { libraryGenerator as jsLibGenerator } from '@nrwl/js/src/generators/library/library';
import { applicationGenerator as reactAppGenerator } from '@nrwl/react/src/generators/application/application';
import { setupTailwindGenerator } from '@nrwl/react/src/generators/setup-tailwind/setup-tailwind';
import { AppGeneratorSchema } from './schema';

import { Linter } from '@nrwl/linter';

const defaultPorts = {
  frontendPort: 3000,
  backendPort: 3333,
};

export default async function (tree: Tree, options: AppGeneratorSchema) {
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
  createAppTsxBoilerPlate(
    tree,
    optionsWithDefaults.name,
    optionsWithDefaults.frontendPort
  );
  createTrpcClientBoilerPlate(tree, optionsWithDefaults.name);
  addFullstackServeTarget(tree, optionsWithDefaults);
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

function createAppTsxBoilerPlate(
  tree: Tree,
  name: string,
  frontendPort: number
) {
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
  updateJson(tree, `apps/${fileName}-web/project.json`, (json) => ({
    ...json,
    targets: {
      ...json.targets,
      serve: {
        ...json.targets.serve,
        options: {
          ...json.targets.serve.options,
          port: frontendPort,
        },
      },
    },
  }));
}

function createTrpcClientBoilerPlate(tree: Tree, name: string) {
  const { className, fileName } = names(name);
  const trpcClientBoilerPlate = `import { ${className}TrpcRouter } from '@acme-webdev/${fileName}-trpc-server';
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
          executor: '@acme-webdev/local-plugin:serve-fullstack',
          options: {
            frontendProject: frontEndKabobCase,
            backendProject: backEndKabobCase,
          },
        },
      },
    };
  });
}

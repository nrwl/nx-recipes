import { ServeFullstackExecutorSchema } from './schema';
// import viteDevServerExecutor from '@nrwl/vite/src/executors/dev-server/dev-server.impl';
import nodeServerExecutor from '@nrwl/js/src/executors/node/node.impl';

import { ExecutorContext } from '@nrwl/devkit';

export default async function runExecutor(
  options: ServeFullstackExecutorSchema,
  context: ExecutorContext
) {
  const { default: viteDevServerExecutor } = await import(
    '@nrwl/vite/src/executors/dev-server/dev-server.impl.js'
  );
  return {
    async *[Symbol.asyncIterator]() {
      let serverStarted = false;
      for await (const serverMessage of nodeServerExecutor(
        { buildTarget: `${options.backendProject}:build` } as any,
        context
      )) {
        yield serverMessage;
        if (!serverStarted && serverMessage.success) {
          serverStarted = true;
          for await (const frontendMessage of viteDevServerExecutor(
            { buildTarget: `${options.frontendProject}:build` },
            context
          )) {
            yield frontendMessage;
          }
        }
      }
    },
  };
}

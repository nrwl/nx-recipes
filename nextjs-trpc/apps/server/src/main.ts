import express from 'express';
import pino from 'pino-http';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '@acme/api';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();
const logger = pino();

app.use(logger);

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => ({
      // no context
    }),
  })
);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const trpcRouter = t.router({
  welcomeMessage: t.procedure.query((req) => ({
    welcomeMessage: `Welcome to test!`,
  })),
});

export type TestTrpcRouter = typeof trpcRouter;

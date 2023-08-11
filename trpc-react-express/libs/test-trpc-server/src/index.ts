import { initTRPC } from '@trpc/server';
import {z} from "zod"

const inputSchema = z.object({
  username: z.string()
})
  .optional()
// add/remove this .optional() call and see the ts error in trpc-react-express/apps/test-web/src/app/app.tsx

const t = initTRPC.create();

export const trpcRouter = t.router({
  welcomeMessage: t.procedure.input(inputSchema).query((req) => ({
    welcomeMessage: `Hi ${req.input?.username || 'User'}. Welcome to test!`,
  })),
});

export type TestTrpcRouter = typeof trpcRouter;

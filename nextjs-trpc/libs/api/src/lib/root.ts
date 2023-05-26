import { router } from './trpc';
import { greetingRouter } from './routes/greeting';

export const appRouter = router({
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;

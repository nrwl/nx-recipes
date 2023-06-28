# Nx + Next.js + tRPC

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

> Note: The same pattern described below can work for standalone apps as well

This example serves as a starting point for using [Next.js](https://nextjs.org) and [tRPC](https://trpc.io) in an [Nx workspace](https://nx.dev)

## What's inside?

This repo contains a Next.js webapp with [App Router](https://nextjs.org/docs/app) that uses React Server Component to [fetch data](https://nextjs.org/docs/app/building-your-application/data-fetching) from a tRPC API. The workspace is organized into the `apps/webapp` Next.js project, and `libs/api` tRPC API project.

The workspace structure is as follows:

```treeview
.
├── apps
│   ├── server
│   │   ├── src
│   │   │   └── main.ts
│   │   └── ...
│   ├── server-e2e
│   ├── webapp
│   │   ├── app
│   │   │   ├── api
│   │   │   │   └── trpc
│   │   │   │       └── [trpc]
│   │   │   │           └── route.ts
│   │   │   ├── api-util.ts
│   │   │   └── page.tsx
│   │   └── ...
│   └── webapp-e2e
├── libs
│   └── api
│      ├── src
│      │  ├── index.ts
│      │  └── lib
│      │      ├── routes
│      │      ├── root.ts
│      │      └── trpc.ts
│      └── ...
└── ...
```

**Notes:**

- The shared tRPC API is defined in the `@acme/api` library (`libs/api`).
- The Express server uses the `@trpc/server/adapters/express` adapter to handle requests to the `/trpc` route.
- The Next.js app has a server component (`apps/webapp/app/page.tsx`) that uses `createTRPCProxyClient` to interface with the Express server using tRPC.
- The root tRPC router (`AppRouter`) is defined in `libs/api/src/lib/root.ts`, and combines additional routers in defined in the `libs/api/src/lib/routes` folder (currently contains the `greetingRouter`).
- There is no data fetching on the client-side.
- The `apps/webapp-e2e` project tests the webapp using Cypress.
- The `apps/server-e2e` project tests the server using Jest.

## How to run it

1. Clone the repo
2. Install dependencies: `npm i`
3. Run the server and webapp: `npx nx run-many -t=serve` (or `npm start`)

Once the webapp is running, you can view it at http://localhost:4200. Notice that the data-fetching is done on the server-side (you can verify this by disabling JavaScript in your browser).

You can also run the E2E tests to verify that the app is working: `nx e2e webapp-e2e`.

## Adding API route

To add a new API route, you can create a new file under `libs/api/src/lib/routes`.

```ts
// libs/api/src/lib/routes/random.ts
import { randomInt } from 'crypto';
import { router, publicProcedure } from '../trpc';

export const randomRouter = router({
  getRandomInt: publicProcedure.query(async () => {
    return { result: randomInt(0, 1000000) };
  }),
});
```

Then add the route to the `appRouter` in `libs/api/src/lib/root.ts`.

```ts
// libs/api/src/lib/root.ts
import { router } from './trpc';
import { greetingRouter } from './routes/greeting';
import { randomRouter } from './routes/random';

export const appRouter = router({
  greeting: greetingRouter,
  random: randomRouter,
});

export type AppRouter = typeof appRouter;
```

## Consuming new API route

There is no additional wiring needed to consume the new API route. The `AppRouter` is automatically adapted into the Express server in `apps/server/src/main.ts`. You can call the new route from the server component `apps/webapp/app/page.tsx`:

```tsx
// apps/webapp/app/page.tsx
import styles from './page.module.css';
import { api } from './api-util';

// Force random number to be re-generated on every request
export const revalidate = 0;

export default async function Index() {
  const { message } = await api.greeting.getGreeting.query();
  const { result: randomInt } = await api.random.getRandomInt.query();
  return (
    <div className={styles['page']}>
      <h1>{message}</h1>
      <p>Your random number is: {randomInt}</p>
    </div>
  );
}
```

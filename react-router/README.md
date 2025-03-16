# Recipe: Building React Router applications with Nx

## What's inside?

This example contains a React Router application in an Integrated Nx Workspace.

It contains an application `acme` and a route called `about`.

## React Router vs Remix

This example shows how to build a React Router application in an Nx workspace. Since React Router is the successor of Remix, you can use this example to build a React Router application in an Nx workspace. Similar capabilities are available in Remix, however, moving forward, React Router is the recommended choice.


## How to run it

Install all dependencies using `npm install`. You can then run commands Like

- `npx nx build acme` to build the React Router application
- `npx nx dev acme` to serve the app in development mode
- `npx nx start acme` to serve the app in production mode
- you can use `npx nx graph` to visualize the structure

### MISC

Other commands like `npx nx test acme` and `npx nx lint acme` are also available, to lint and test the application.

### E2E

We have setup Playwright for E2E testing. You can run `npx nx e2e acme-e2e` to run the E2E tests.

# Nx Local Plugin Guide: tRPC

[Will add thumbnail here when ready]

Source code for the tRPC of Local Nx Plugins on the Nx blog site.

- [article link to be added here]

## What's inside?

This example contains an example workspace that created a tRPC-centric stack for their workspace via a local plugin. This plugin includes a generator to create a full-stack application, focused on tRPC. This plugin also includes an executor that runs the frontend and backend processes on a single process and separates and marks the log appropriately.

## How to run it

After cloning the workspace, a fullstack application called `test` already exists. You can visualize it by running the command `npx nx graph`.

You can create more full-stack applications, giving them any name you want with the command:

```
npx nx g @trpc-react-express/local-plugin:app <your desired name here>
```

You can also run the full-stack serve executor by running the command: `npx nx serve-fullstack test-web`.

## Learn more

- [Article link to be added here]

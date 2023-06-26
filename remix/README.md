# Recipe: Building Remix applications with Nx

## What's inside?

This example contains a Remix application in an Integrated Nx Workspace.

It contains an application `myapp` and a library `login`.

It takes advantage of Remix's Route Loaders and standard best practices of Nx by showing how to store the logic for a Route Loader in an Nx Library and using it for the `admin` route.  
The files `apps/myapp/app/routes/admin.tsx` and `libs/login/src/lib/admin/admin.loader.ts` show this setup.



## How to run it

Install all dependencies using `npm install`. You can then run commands Like

- `npx nx build myapp` to build the Remix application
- `npx nx serve myapp` to serve the app
- you can use `npx nx graph` to visualize the structure

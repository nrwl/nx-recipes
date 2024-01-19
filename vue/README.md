# Vue with Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

An example repository showing how to use [Vue](https://vuejs.org/) with [Nx](https://nx.dev)

## What's inside

This repository contains:

- A Vue Application
- An E2E project for the Vue Application
- A library that shares an icon

## How to run it

### Build

To build the application you run this command at the root of your workspace.

```shell
npx nx build my-app:build
```

### Serve

To serve the application, you can run this command at the root of your workspace.

```shell
npx nx serve my-app:serve
```

Then you can navigate to http://localhost:4200/ to view the application.

### Test

To run unit test, you can run this command at the root of your workspace.

```shell
npx nx test my-app:test
```

### E2E

To run your e2e tests, you can run this command at the root of your workspace.

```shell
npx nx e2e my-app-e2e
```

## Note

For Aliasing a project (`import { Header } from '@my-project/lib'`) you might need to have paths in both:

- `tsconfig.json` to resolve IDE look ups.
- `vite.config.json` to resolve runtime resolutions.

## Learn More

You can learn more about Nx and Vue:

- [Nx](https://nx.dev)
- [Vue](https://vuejs.org/)

# Svelte with Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

An example repository showing how to use [Svelte](https://svelte.dev/) with [Nx](https://nx.dev).

## What's inside

This repository contains:

- A Svelte Application
- An E2E project for the Svelte Project
- A shared library project
  - That contains a component

## How to run it

### Build

To build the application you run this command at the root of your workspace.

```shell
npx nx build svelteapp
```

### Serve

To serve the application, you can run this command at the root of your workspace.

```shell
npx nx serve svelteapp
```

Then you can navigate to http://localhost:4200/ to view the application.

### E2E

To run your e2e tests, you can run this command at the root of your workspace.

```shell
npx nx e2e svelteapp-e2e
```

## Learn More

You can find out more detail you can take a look at the following:

- [Nx](https://nx.dev)
- [Svelte](https://svelte.dev/)

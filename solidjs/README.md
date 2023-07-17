# Solid with Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

An example repository showcasing using [Solid](https://www.solidjs.com/) with [Nx](https://nx.dev) leveraging the [@nx/vite](https://nx.dev/packages/vite) plugin.

## What's inside

The repository contains:

- A Solid Application _(apps/my-solid-app)_
- An E2E Project _(apps/my-solid-app-e2e)_
- A Workspace Library to house logic used by the application _(libs/my-lib)_

## How to run it

### Serve the application

To serve the application, run the command below and then in a browser navigate to `http://localhost:3000/`

```shell
npx nx serve my-solid-app
```

### Build the application

To build the application, run the command below.

```shell
npx nx build my-solid-app
```

### Run E2E tests

To run the e2e tests, run the command below.

```shell
npx nx e2e my-solid-app-e2e
```

## Learn More

Use the resources below learn more about Solid and Nx.

- [Solid](https://www.solidjs.com/)
- [Nx](https://nx.dev)

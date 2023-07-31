# Lit with Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

An example repository showcasing using [Lit](https://lit.dev/) with [Nx](https://nx.dev).

## What's inside

The repository contains: 

 - A Lit Application _(apps/my-lit-app)_
 - An E2E Project _(apps/my-lit-app-e2e)_
 - A Workspace Library to house logic used by the application _(libs/my-lib)_

## How to run it

### Serve the application 

To serve the application, run the command below and then in a browser navigate to `http://localhost:4200/`

```shell
npx nx serve my-lit-app
```

### Build the application

To build the application, run the command below.

```shell
npx nx build my-lit-app
```

### Test the application

To run the unit tests, run the command below.

```shell
npx nx test my-lit-app
```

### Run E2E tests

To run the e2e tests, run the command below.

```shell
npx nx e2e my-lit-app-e2e
```

## Learn More

Use the resources below learn more about Lit and Nx.

- [Lit](https://lit.dev/)
- [Nx](https://nx.dev)

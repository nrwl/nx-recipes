# Qwik with Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

An example repository showcasing using [Qwik](https://qwik.builder.io/) with [Nx](https://nx.dev) leveraging the [qwik-nx](https://github.com/qwikifiers/qwik-nx) plugin.

## What's inside

The repository contains: 

 - A Qwik Application _(apps/todo)_
 - An E2E Project _(apps/todo-e2e)_
 - A Workspace Library to house logic used by the application _(libs/data-access)_

## How to run it

### Serve the application 

To serve the application, run the command below and then in a browser navigate to `http://localhost:4200/todo`

```shell
npx nx serve todo
```

### Build the application

To build the appliaction, run the command below.

```shell
npx nx build todo
```

### Test the application

To run the unit tests, run the command below.

```shell
npx nx test todo
```

### Run E2E tests

To run the e2e tests, run the command below.

```shell
npx nx e2e todo-e2e
```

## Learn More

Use the resources below learn more about Qwik and Nx.

- [Qwik](https://qwik.builder.io)
- [Nx](https://nx.dev)
- [qwik-nx](https://github.com/qwikifiers/qwik-nx)

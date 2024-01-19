# Rust with Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

An example repository showcasing using [Rust](https://www.rust-lang.org/) with [Nx](https://nx.dev) leveraging the [@monodon/rust](https://github.com/cammisuli/monodon/tree/main/packages/rust) plugin.

## What's inside

The repository contains:

- A Rust HTTP Server Application _(apps/myapp)_
- A Workspace Library to store the `cats` route _(libs/cats)_

## How to run it

### run the application

To run the application, run the command below and then in a browser navigate to `http://localhost:8080/cats`

```shell
npx nx run myapp:run
```

### Build the application

To build the application, run the command below.

```shell
npx nx build myapp
```

### Test the application

To run the unit tests, run the command below.

```shell
npx nx test myapp
```

## Learn More

Use the resources below learn more about Qwik and Nx.

- [Rust](https://www.rust-lang.org/)
- [Nx](https://nx.dev)
- [@monodon/rust](https://github.com/cammisuli/monodon/tree/main/packages/rust)

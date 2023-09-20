# Tutorial: Building React Apps with an Integrated Monorepo Setup

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)


Source code for the React monorepo application tutorial on the Nx docs:
- Tutorial: https://nx.dev/getting-started/react-monorepo-tutorial

## What's inside?

This example contains two React applications and three shared libraries that started from the `react-monorepo` preset. 

```
npx create-nx-workspace@latest myngapp --preset=react-monorepo
```

It contains 

- two React application: `apps/react-store` and `apps/inventory`
- three local libraries: `libs/products`, `libs/orders` and `libs/shared/ui` to demo how to modularize a codebase
- uses [Nx module boundary rules](https://nx.dev/core-features/enforce-project-boundaries) to enforce architectural constraints

Follow through the tutorial linked above for more details.

## How to run it

Clone it locally, install all dependencies using `npm install`. You can then run commands Like

- `npx nx build` to build the React application
- `npx nx serve` to serve the app
- you can use `npx nx graph` to visualize the structure

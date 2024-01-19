# Tutorial: Building Angular Apps with the Nx Standalone Projects Setup

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)


Source code for the Angular standalone application tutorial on the Nx docs:
- Tutorial: https://nx.dev/getting-started/angular-standalone-tutorial

## What's inside?

This example contains a single Angular application that has been generated with the `angular-standalone` preset. 

```
npx create-nx-workspace@latest myngapp --preset=angular-standalone
```

It contains 

- a single root-level Angular application (in `src`)
- an e2e project based on Cypress
- two local libraries, `modules/products`, `modules/orders` and `modules/shared/ui` to demo how to modularize a codebase
- uses [Nx module boundary rules](https://nx.dev/core-features/enforce-project-boundaries) to enforce architectural constraints

Follow through the tutorial linked above for more details.

## How to run it

Clone it locally, install all dependencies using `npm install`. You can then run commands Like

- `npx nx build` to build the Angular application
- `npx nx serve` to serve the app
- you can use `npx nx graph` to visualize the structure

Alternatively 👇

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/nrwl/nx-recipes/tree/main/angular-standalone?file=README.md)
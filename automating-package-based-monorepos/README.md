# Using Nx Generators to Automate Package Scaffolding for PNPM workspaces

[![package-based monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=package-based%20monorepo&color=orange)](https://nx.dev/concepts/integrated-vs-package-based#package-based-repos)

Source code for the corresponding Youtube video:

- Video: https://youtu.be/myqfGDWC2go

## What's inside?

This contains a simple example of a PNPM workspaces based monorepo (note: you can just swap it with NPM or Yarn workspace if you prefer those). The workspace contains

- a single React library `ui`
- a local [Nx Plugin](https://nx.dev/plugins/intro/getting-started#create-a-local-plugin) in the `automation` package, that comes with a generator to scaffold new React libraries following the setup of `ui`.

## How to run it

You can just run operations with Nx such as

- building all projects: `pnpm nx run-many -t build`
- building just a single project: `pnpm nx build ui`

And you can also use the generator to scaffold new React libraries:

```
pnpm nx g automation:reactlib mynewreactlib
```

Alternatively 👇

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/nrwl/nx-recipes/tree/main/automating-package-based-monorepos?file=README.md)

## Learn More

- [Docs: Nx Plugins](https://nx.dev/plugins/intro/getting-started)
- [Video: Scaffold new Pkgs in a PNPM Workspaces Monorepo](https://youtu.be/myqfGDWC2go)
- [Blog: Introduction to PNPM workspaces based monorepos](https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem)
- [Video: Lightning Fast PNPM Workspaces](https://youtu.be/PwfR77oe1E8)

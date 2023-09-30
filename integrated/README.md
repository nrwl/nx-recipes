# Tutorial: Integrated Monorepo

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

Source code for the integrated monorepo tutorial on the Nx docs:

- Tutorial: https://nx.dev/getting-started/integrated-repo-tutorial
- Video: https://youtu.be/weZ7NAzB7PM

## What's inside?

Leverages the [@nx/js](https://nx.dev/packages/js) Nx plugin to setup an integrated monorepo with two packages, `is-even` and `is-odd`.

## How to run it

Install all dependencies using `npm install`. You can then run commands Like

- `npx nx build is-even` to run the build for just the `is-even` package
- `npx nx run-many --target=build` to run the `build` target for all packages in the workspaces
- you can use `npx nx graph` to visualize the structure

## Learn more

- [Nx Docs: Integrated Repos vs. Package-based Repos](https://nx.dev/concepts/integrated-vs-package-based)
- [Video: Packaged based vs Integrated Style - Use Nx however it works best for you](https://youtu.be/ArmERpNvC8Y)
- [Docs: Nx Console extension](https://nx.dev/core-features/integrate-with-editors)

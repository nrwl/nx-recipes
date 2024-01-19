# Set up Compodoc for Storybook on Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

This repository contains a sample Nx workspace that demonstrates how to set up Compodoc for your Angular Storybook instances on Nx.

You can read more in the [Nx documentation for Setting up Compodoc for Storybook on Nx](https://nx.dev/recipes/storybook/angular-storybook-compodoc).

## What's inside?

This project contains an Angular application and an Angular library. Both projects are set up to use Storybook, with `compodoc` enabled.

Look into the following files to see how the sample is configured:

- Setting `autodocs: true` on my app's Storybook configuration: [apps/my-app/.storybook/main.ts](apps/my-app/.storybook/main.ts)
- Setting the `compodoc`'s file in my app's Storybook `preview.ts`: [apps/my-app/.storybook/preview.ts](apps/my-app/.storybook/preview.ts)
- Including the `*.component.ts` files in the TypeScript compilation, to make sure the comments are processed to generate the docs: [apps/my-app/.storybook/tsconfig.json](apps/my-app/.storybook/tsconfig.json)
- Adding comments in the component to be used for generating the docs: [apps/my-app/src/app/app-button/app-button.component.ts](apps/my-app/src/app/app-button/app-button.component.ts)

### A small demo for Interaction Tests

This project also contains a small demo for Interaction Tests. Look into the following file:

- [apps/my-app/src/app/app-button/app-button.component.stories.ts](apps/my-app/src/app/app-button/app-button.component.stories.ts)

See how the `play` function is used to run an assertion on the component's DOM. To run this test you can do the following:

On one terminal tab:

```shell
npx nx storybook my-app
```

and keep the Storybook server running.

On another terminal tab:

```shell
npx nx test-storybook my-app
```

and see how the test passes.
You can read more about this in the [Nx documentation for Storybook Interaction Tests](https://nx.dev/recipes/storybook/storybook-interaction-tests).

## How to run it

1. Clone the repository
2. Run `yarn`
3. Run/Build the Storybook host apps in the following way:

### Just run Storybook for your main app

```shell
npx nx storybook my-app
```

and

```shell
npx nx build-storybook my-app
```

## Learn more

- [Nx documentation for Setting up Compodoc for Storybook on Nx](https://nx.dev/recipes/storybook/angular-storybook-compodoc)
- [Set up Storybook for Angular on Nx](https://nx.dev/recipes/storybook/overview-angular)
- [Nx documentation for Storybook best practices](https://nx.dev/storybook/best-practices)
- [Set up Storybook on Nx](https://nx.dev/nx-api/storybook)
- [Nx documentation for Storybook Interaction Tests](https://nx.dev/recipes/storybook/storybook-interaction-tests)

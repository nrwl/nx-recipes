# Setup Compodoc for Storybook on Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

This repository contains a sample Nx workspace that demonstrates how to set up [Compodoc](https://compodoc.app/) for Angular projects with Storybook configured.

You can read more in the [Nx documentation for how Set up Compodoc for Storybook on Nx](https://nx.dev/storybook/angular-storybook-compodoc).

## What's inside?

This project contains an Angular application and an Angular library with Storybook set up. In both projects, Compodoc is enabled and set up, so that you can generate documentation for your components, and display it in Storybook.

## How to run it

1. Clone the repository
2. Run `yarn`
3. Run/Build the Storybook projects.

### Run Storybook

```
nx storybook web
```

or

```
nx run web:storybook
```

for the `web` project.

And:

```
nx storybook my-btn
```

or

```
nx run my-btn:storybook
```

for the `my-btn` project.

Now, visit [http://localhost:4400](http://localhost:4400) to see the Storybook. Click on the `Docs` tab to see the documentation!

## Learn more

- [Set up Storybook on Nx](https://nx.dev/packages/storybook)
- [Set up Storybook for Angular on Nx](/storybook/overview-angular)
- [Set up Compodoc for Storybook on Nx](https://nx.dev/storybook/angular-storybook-compodoc)

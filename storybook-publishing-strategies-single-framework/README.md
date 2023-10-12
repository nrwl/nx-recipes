# Publishing strategies for Storybook in Single-Framework Nx workspaces

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

This repository contains a sample Nx workspace that demonstrates how to publish Storybook making the best out of Nx's capabilities.

You can read more in the [Nx documentation for Storybook best practices](https://nx.dev/storybook/best-practices), and more specifically the following guides: [Publishing Storybook: One main Storybook instance for all projects](https://nx.dev/recipes/storybook/one-storybook-for-all) and [Publishing Storybook: One Storybook instance per scope](https://nx.dev/recipes/storybook/one-storybook-per-scope).

## What's inside?

This project contains a number of libraries and applications, all using the same framework. The objective is to showcase how you can publish one single Storybook instance that contains stories from all the different libraries. And also, how you can publish one Storybook instance per scope.

Look into the following files to see how the sample is configured:

- For one Storybook containing all the stories: [storybook-host/.storybook/main.ts](storybook-host/.storybook/main.ts)

- For one Storybook per scope:
  - For all `admin` components: [storybook-host-admin/.storybook/main.ts](storybook-host-admin/.storybook/main.ts)
  - For all `client` components: [storybook-host-client/.storybook/main.ts](storybook-host-client/.storybook/main.ts)
  - For all `shared` components: [storybook-host-shared/.storybook/main.ts](storybook-host-shared/.storybook/main.ts)

## How to run it

1. Clone the repository
2. Run `yarn`
3. Run/Build the Storybook host apps in the following way:

### For one Storybook containing all the stories:

```shell
npx nx storybook storybook-host
```

and

```shell
npx nx build-storybook storybook-host
```

### For one Storybook per "scope":

- For all `admin` components:

  ```shell
  npx nx storybook storybook-host-admin
  ```

  and

  ```shell
  npx nx build-storybook storybook-host-admin
  ```

- For all `client` components:

  ```shell
  npx nx storybook storybook-host-client
  ```

  and

  ```shell
  npx nx build-storybook storybook-host-client
  ```

- For all `shared` components:

  ```shell
  npx nx storybook storybook-host-shared
  ```

  and

  ```shell
  npx nx build-storybook storybook-host-shared
  ```

You can then use the Storybook apps that you built to deploy them to a static hosting service.

## Learn more

- [Nx documentation for Storybook best practices](https://nx.dev/storybook/best-practices)
- [Publishing Storybook: One main Storybook instance for all projects](https://nx.dev/recipes/storybook/one-storybook-for-all)
- [Publishing Storybook: One Storybook instance per scope](https://nx.dev/recipes/storybook/one-storybook-per-scope)
- [Set up Storybook on Nx](https://nx.dev/nx-api/storybook)

# Publishing strategies for Storybook in Multi-Framework Nx workspaces

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

This repository contains a sample Nx workspace that demonstrates how to publish Storybook making the best out of Nx's capabilities.

You can read more in the [Nx documentation for Storybook best practices](https://nx.dev/storybook/best-practices), and more specifically the following guide: [Publishing Storybook: One main Storybook instance using Storybook Composition](https://nx.dev/recipes/storybook/one-storybook-with-composition).

## What's inside?

This project contains a number of libraries and applications using different frameworks. The objective is to showcase how you can publish one single Storybook instance that contains stories from all the different frameworks.

In the project, you can see two host apps for Storybook: `storybook-host-angular` and `storybook-host-react`. Each of these apps contains the Angular and the React stories accordingly. The reason for this is because Storybook does not support multiple frameworks in the same instance. So, we need to run two instances of Storybook, one for Angular and one for React. Then, we can use Storybook Composition, which is a feature of Storybook, to combine the two instances into one, main, host, called `storybook-host`.

Look into the following files to see how the sample is configured:

- For the Storybook composition setup: [storybook-host/.storybook/main.ts](storybook-host/.storybook/main.ts)

- For the framework-specific Storybooks:

  - For all Angular stories: [storybook-host-angular/.storybook/main.ts](storybook-host-angular/.storybook/main.ts)
  - For the Angular host `project.json` Storybook port configuration: [storybook-host-angular/project.json](storybook-host-angular/project.json)

  - For all React stories: [storybook-host-react/.storybook/main.ts](storybook-host-react/.storybook/main.ts)

  - For the React host `project.json` Storybook port configuration: [storybook-host-react/project.json](storybook-host-react/project.json)

## How to run it

1. Clone the repository
2. Run `yarn`
3. Run/Build the Storybook host apps as explained below:

### Starting the Storybook host apps

To start the Storybook host apps, you need to run the Angular and React Storybook instances separately. To do so, run the following commands in two different terminals:

```shell
npx nx storybook storybook-host-angular
```

and

```shell
npx nx storybook storybook-host-react
```

Once the Storybook server has started in both (you can see one running on port 4401 and the other running on port 4402), you can now run the main host app:

```shell
npx nx storybook storybook-host
```

This will start the Storybook host app on port 4400. You can now access the Storybook host app at http://localhost:4400.

You can use the built Storybook apps to deploy them to a static hosting service.

## Learn more

- [Nx documentation for Storybook best practices](https://nx.dev/storybook/best-practices)
- [Publishing Storybook: One main Storybook instance using Storybook Composition](https://nx.dev/recipes/storybook/one-storybook-with-composition)
- [Nx documentation for Storybook Composition](https://nx.dev/storybook/storybook-composition-setup)
- [Set up Storybook on Nx](https://nx.dev/nx-api/storybook)

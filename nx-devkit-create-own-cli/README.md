# Create Your Own CLI with Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

This sample repo shows how to use Nx (in particular the Nx Devkit) as a platform to build your own CLI on top.

- Check out the video tutorial: https://youtu.be/ocllb5KEXZk
- Blog post: https://blog.nrwl.io/create-your-own-create-react-app-cli-d1bf13904e35?sk=a156dddcf85223e7d3e57312955714ea

## What's inside?

This example shows a monorepo setup with a `packages` folder containing 3 packages:

- `create-my-own-react-app`: The CLI which users invoke to trigger the workspace generation
- `my-own-react`: The Nx plugin implementation of the generator that scaffolds the workspace
- `my-own-react-e2e`: Project setup with e2e tests to verify the generator works as expected

## How to run it

Run the local NPM registry:

```
npx nx local-registry
```

In a different window, publish a new version of the packages:

```
npx nx run-many -t publish --ver 1.0.0 --tag latest
```

Use the CLI by invoking

```
npx create-my-own-react-app@latest mytestapp
```

## Learn more

- [Video tutorial: ](https://youtu.be/ocllb5KEXZk)
- [Blog: Create Your own create-react-app CLI](https://blog.nrwl.io/create-your-own-create-react-app-cli-d1bf13904e35?sk=a156dddcf85223e7d3e57312955714ea)
- [Extending Nx](https://nx.dev/extending-nx/intro/getting-started)

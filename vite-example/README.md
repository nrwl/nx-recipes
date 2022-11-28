# Setup Vite for React apps on Nx

[![integrated monorepo](https://img.shields.io/static/v1?label=monorepo%20type&message=integrated&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

This repository contains a sample Nx workspace that demonstrates how to set up [Vite](https://vitejs.dev/) for Web and React apps.

You can read more in the [`@nrwl/vite` package documentation](https://nx.dev/packages/vite).

## What's inside?

This project contains a Web (`web-vite`) application, a React (`react-vite`) application and two React libraries. The `button` library is imported in the `ui` library, and the `ui` library is imported in the `react-vite` application. This is to demonstrate the path resolution works correctly.

The `react-vite` application is also importing some images and some CSS files, to demonstrate that the `@nrwl/vite` package works with assets, as well.

## How to run it

1. Clone the repository
2. Run `yarn`
3. Run/Build the React and the Web applications!

### Serve the apps

```
nx serve react-vite
```

or

```
nx run react-vite:serve
```

and

```
nx serve web-vite
```

or

```
nx run web-vite:serve
```

Now, visit [http://localhost:4200](http://localhost:4200) to see your app running!

### Build the apps

```
nx build react-vite
```

or

```
nx run react-vite:build
```

and

```
nx build web-vite
```

or

```
nx run web-vite:build
```

## Things to notice

### `index.html`

The [`index.html`](apps/react-vite/src/index.html#L13) of your React app is pointing to `main.tsx`. This is because Vite is using the `main.tsx` file as the entry point of your application.

The [`index.html`](apps/web-vite/src/index.html#L13) of your Web app is pointing to `main.ts`. This is because Vite is using the `main.ts` file as the entry point of your application.

### `tsconfig.json`

Notice the new `compilerOptions` in the [`tsconfig.json`](apps/react-vite/tsconfig.json#L3) of your React app. Same goes for the `compilerOptions` in the [`tsconfig.json`](apps/web-vite/tsconfig.json#L3) of your Web app. You can read more about these compiler options in the [Vite documentation](https://vitejs.dev/guide/features.html#typescript-compiler-options).

### `project.json` targets

Your applications have new configuration for their `serve` and `build` targets. These targets are using the [`@nrwl/vite:dev-server`](apps/web-vite/project.json#L38) and [`@nrwl/vite:build`](apps/web-vite/project.json#L8) executors, respectively.

### Vite configuration

We added a `vite.config.ts` file at the root of both the applications. This file is used to configure Vite. You can read more about the configuration options in the [Vite documentation](https://vitejs.dev/config/).

The [application-specific `vite.config.ts`](apps/web-vite/vite.config.ts) files are used to import [framework-specific plugins](apps/react-vite/vite.config.ts#L8), and also configure your Vite application.

### The `public/` directory

If you look at the root of each of your apps, we have added a `public/` directory. This directory is used to store static assets that will be copied to the `dist/` directory when you build your app. You can read more about this in the [Vite documentation](https://vitejs.dev/guide/assets.html#the-public-directory).

When you serve your app, you can go to [`http://localhost:4200/hello.md`](http://localhost:4200/hello.md) for example, to see the [`hello.md`](apps/react-vite/public/hello.md) asset being served.

## Learn more

- [`@nrwl/vite` package documentation](https://nx.dev/packages/vite)

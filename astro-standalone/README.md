# Astro

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)

Integrate Nx into an [Astro](https://astro.build) project.

## What's inside?

This example takes an existing [Astro](https://astro.build) application, adds [Nx](https://nx.dev) to it, and extracts common components into it's own Nx project va the [`@nx/js` plugin](https://nx.dev/packages/js/generators/library#@nx/js:library). This example also has [Playwright](https://playwright.dev) setup to run basic e2e tests on the Astro application.

### How did we set this up?

Create a new Astro app

```shell
❯ npm create astro@latest
```

Add Nx via [`nx init`](https://nx.dev/recipes/adopting-nx/adding-to-existing-project)

```shell
❯ npx nx@latest init
 >  NX   🐳 Nx initialization


 >  NX   🧑‍🔧 Please answer the following questions about the scripts found in your package.json in order to generate task runner configuration

✔ Which of the following scripts are cacheable? (Produce the same output given the same input, e.g. build, test and lint usually are, serve and start are not). You can use spacebar to select one or more scripts. · build

✔ Does the "build" script create any outputs? If not, leave blank, otherwise provide a path (e.g. dist, lib, build, coverage) · dist
✔ Enable distributed caching to make your CI faster · No

 >  NX   📦 Installing dependencies

 >  NX   🎉 Done!

   - Enabled computation caching!
   - Learn more at https://nx.dev/recipes/adopting-nx/adding-to-existing-project.
```

(Optional) Add playwright

```shell
npm init playwright@latest
```

and setup e2e command in the `package.json`

```json
"scripts": {
  "e2e": "nx exec -- playwright test",
}
```

and update `cacheableOperations` in `nx.json` to include `e2e`.

> `cacheableOperations` defines the list of targets/operations that are cached by Nx. [Learn about other Nx task runner options](https://nx.dev/reference/nx-json#tasks-runner-options)

### Generate new project

Install the `@nx/js` plugin.

> Note the version should match the version of `nx` in your `package.json`

```shell
npm i -D @nx/js
```

Use the [library generator](https://nx.dev/packages/js/generators/library#@nx/js:library)

```shell

nx g library components --minimal --simple-name --unitTestRunner=none
```

If using Astro components, you can export all files within the `src` directory of the project instead of reexporting them in the index.ts file. This is because TypeScript can have issues with importing `.astro` files.

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "plugins": [
      {
        "name": "@astrojs/ts-plugin"
      }
    ],
    "paths": {
      "@myrepo/components/*": ["components/src/*"]
    }
  }
}
```

Since Astro supports different frameworks, like React, you can also use the [`@nx/react` plugin](https://nx.dev/packages/react/generators/library#@nx/react:library) to generate a react specific project.

## How to run it

- `nx dev` or `npm start` to run the Astro application.
- `nx build` or `npm run build` to run the Astro build.
- `nx e2e` or `npm run e2e` to run e2e tests with Playwright.

## Learn more

- [Adopting Nx](https://nx.dev/recipes/adopting-nx)
- [Why Nx?](https://nx.dev/getting-started/why-nx)
- [Astro Docs](https://docs.astro.build/en/getting-started/)
- [Playwright Docs](https://playwright.dev/docs/intro)

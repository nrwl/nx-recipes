# Nuxt Integrated

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

Add a Nuxt app to an existing Nx workspace.

## What's inside?

This workspace contains 3 projects, A [Nuxt app](https://nuxt.com/) and 2 libraries, `ui` and `utils`.

### How did we set this up?

For this example, a basic getting Nuxt app was used via [`nuxi init`](https://nuxt.com/docs/getting-started/installation) and the two libraries were created with the `@nx/js` plugin.

Create a Nuxt app in an existing Nx workspace.

> You can create a new Nx workspace with [`create-nx-worksapce`](https://nx.dev/getting-started/intro)

```shell
❯ cd apps
❯ npx nuxi@latest init <app-name>
Nuxi 3.6.5
✨ Nuxt project is created with v3 template.
```

Tell nx how to cache the build with the `nx` key in the package.json

```json
{
  "name": "<app-name>",
  "private": true,
  "scripts": {
    /***/
  },
  "nx": {
    "targets": {
      "build": {
        // Tells Nx what files to cache after running build
        "outputs": ["{projectRoot}/.output", "{projectRoot}/.nuxt"]
      }
    },
    // used for project graph construction, explained down below
    "tags": ["scope:<app-name>"],
    "implicitDependencies": ["tag:scope:<app-name>"]
  }
}
```

To add alias paths from the root level `tsconfig.base.json`, Nuxt recommends [using the `nuxt.config.ts` instead of a tsconfig for alias paths](https://nuxt.com/docs/guide/directory-structure/tsconfig).
These paths are added to the auto-generated tsconfig by Nuxt.

Here is an example of loaded the `tsconfig.base.json` paths. [See source file](./apps/demo/nuxt.config.ts)

```ts
import { defineNuxtConfig } from 'nuxt/config';
import { join } from 'path';
import { workspaceRoot } from '@nx/devkit';

/**
 * Load tsconfig paths from a tsconfig file
 **/
function getMonorepoTsConfigPaths(tsConfigPath: string) {
  const tsPaths = require(tsConfigPath)?.compilerOptions?.paths as Record<string, string[]>;

  const alias: Record<string, string> = {};
  if (tsPaths) {
    for (const p in tsPaths) {
      alias[p.replace(/\/\*$/, '')] = join(workspaceRoot, tsPaths[p][0].replace(/\/\*$/, ''));
    }
  } else {
    console.warn('Root level tsconfig ', tsConfigPath, ' does not contain any paths');
  }

  return alias;
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /**
   * Nuxt recommends setting custom alias from a tsconfig here,
   * instead of in tsconfig since it will override the auto generated tsconfig.
   * all aliases added here will be added to the auto generated tsconfig.
   * Other projects generated with Nx will be added to the root level tsconfig.base.json
   * which might want to be used in this project.
   *
   * https://nuxt.com/docs/guide/directory-structure/tsconfig
   **/
  alias: getMonorepoTsConfigPaths('../../tsconfig.base.json'),
  devtools: { enabled: true },
});
```

Move dependencies/devDependencies from the `apps/<app-name>/package.json` to the root level `package.json`. This is to use a [single version policy](https://nx.dev/concepts/more-concepts/dependency-management#single-version-policy) which makes managing dependencies across the monorepo easier at scale.

Update the `nx.json` inputs to [include the `package.json` as projects](https://nx.dev/recipes/tips-n-tricks/include-all-packagejson#include-all-package.json-files-as-projects) and exclude the output directories of Nuxt for [cache inputs](https://nx.dev/reference/project-configuration#inputs-&-namedinputs)

```json
{
  "plugins": ["nx/plugins/package-json"], // tell nx to read package.json files
  "namedInputs": {
    "default": [
      "{projectRoot}/**/*",
      "!{projectRoot}/.nuxt/**/*", // ignore nuxt specific output folders
      "!{projectRoot}/.output/**/*",
      "sharedGlobals"
    ],
    "production": ["default", "!{projectRoot}/.eslintrc.json"],
    "sharedGlobals": []
  }
}
```

### Generate new projects

For other vue based libraries you can use the `@nx/js` plugin as the base for the project.

> Note the version of `@nx/js` should match the version of `nx` in your `package.json`

```shell
npm i -DE @nx/js@<nx-version>
```

> Feel free to pick which options make the most sense for you, such as using vitest for a test runner or using rollup/vite to bundle the project if you plan to publish the project outside the monorepo.

```shell
❯ nx g lib --minimal --simpleName

>  NX  Generating @nx/js:library

✔ What name would you like to use for the library? · ui
✔ Which unit test runner would you like to use? · none
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · none
CREATE libs/ui/tsconfig.json
CREATE libs/ui/src/index.ts
CREATE libs/ui/src/lib/cmp.ts
CREATE libs/ui/tsconfig.lib.json
CREATE libs/ui/project.json
CREATE libs/ui/.eslintrc.json
UPDATE tsconfig.base.json
```

If re-exporting `.vue` file, you might run into TS error about not understanding the files. In that case, you can add a small `d.ts` file with the following contents

```ts
declare module '*.vue';
```

Since Nx only processes typescript files by default, the project graph won't show the usage of the `ui` library in the Nuxt app.
There are a couple ways to solve this problem, but the simplest will be to use [`tags`](https://nx.dev/reference/project-configuration#tags) and use those tags within the projects [`implicitDependencies`](https://nx.dev/reference/project-configuration#implicitdependencies).

Setting a tag for all project being used with `<app-name>` in project.json files would look like

```json
{
  "tags": ["scope:<app-name>"]
}
```

and in the `<app-name>` package.json, the `implicitDependencies` is set for that tag.

> Note the `scope` part of a tag is not special, using `tag:` in the `implicitDependencies` is special syntax that tells Nx to search for all projects with that specific tag.

```json
{
  "name": "<app-name>",
  "nx": {
    "targets": {
      /***/
    },
    "tags": ["scope:<app-name>"],
    "implicitDependencies": ["tag:scope:<app-name>"]
  }
}
```

## How to run it

- `nx dev <app-name>` to run the Nuxt application.
- `nx build <app-name>` to run the Nuxt build.

## Learn more

- [Adopting Nx](https://nx.dev/recipes/adopting-nx)
- [Why Nx?](https://nx.dev/getting-started/why-nx)
- [Nuxt Docs](https://nuxt.com/docs/getting-started/introduction)

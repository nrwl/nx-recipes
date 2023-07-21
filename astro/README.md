# Astro

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)

Write a short, one sentence description of the example.

## What's inside?

Outline the structure of the example, the relevant part people should go and look at etc.

### Creating Workspace

Create a new astro app

```shell
❯ npm create astro@latest
```

Add Nx via [`nx init`](https://nx.dev/recipes/adopting-nx/adding-to-existing-project)

```shell
❯ npx nx@latest init
Need to install the following packages:
  nx@16.5.3
Ok to proceed? (y) y

 >  NX   🐳 Nx initialization


 >  NX   🧑‍🔧 Please answer the following questions about the scripts found in your package.json in order to generate task runner configuration

✔ Which of the following scripts are cacheable? (Produce the same output given the same input, e.g. build, test and lint usually are, serve and start are not). You can use spacebar to select one or more scripts. · build

✔ Does the "build" script create any outputs? If not, leave blank, otherwise provide a path (e.g. dist, lib, build, coverage) · dist
✔ Enable distributed caching to make your CI faster · No

 >  NX   📦 Installing dependencies


added 512 packages, and audited 513 packages in 11s

181 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

 >  NX   🎉 Done!

   - Enabled computation caching!
   - Learn more at https://nx.dev/recipes/adopting-nx/adding-to-existing-project.
```

## How to run it

Describe how to run the examples. Like specific Nx commands the viewer might want to run/try.

## Learn more

This is a section of bullet points with more info, pointing to Nx docs, blog posts, videos etc.

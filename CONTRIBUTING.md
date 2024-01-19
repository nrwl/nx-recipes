# Contributing

We'd love to have new examples being contributed to this repository.

## Steps

- open an issue to discuss the example
- submit a PR

## Example Structure

Every example should live within a dedicated folder created at the root of this repository and being completely self-contained.

Make sure there is at least one e2e test in your example that verifies that the core functionality of your example actually works.

The folder should follow the `<framework>-<tech-1>-<tech-2>-...-<tech-n>` naming convention (e.g. `remix`, `remix-prisma`, `remix-prisma-flyio`), or for non-JS recipes use `<lang>-<tech-1>-<tech-2>-...-<tech-n>` (e.g. `rust`, `rust-hyper`, `java-gradle`, `java-springboot`). It must also contain a `README.md` file with the following section

```markdown
# Example Title

Add a monorepo type badge (see examples later)

Write a short, one sentence description of the example.

## What's inside?

Outline the structure of the example, the relevant part people should go and look at etc.

## How to run it

Describe how to run the examples. Like specific Nx commands the viewer might want to run/try.

## Learn more

This is a section of bullet points with more info, pointing to Nx docs, blog posts, videos etc.
```

Add a badge to your example README that defines the type of Nx workspace setup:

[![package-based monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=package-based%20monorepo&color=orange)](https://nx.dev/concepts/integrated-vs-package-based#package-based-repos)

```
[![package-based monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=package-based%20monorepo&color=orange)](https://nx.dev/concepts/integrated-vs-package-based#package-based-repos)
```

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)

```
[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)
```

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)

```
[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)
```

## Questions?

Feel free to ping [Juri on Twitter](https://twitter.com/juristr) or send an email to `devrel@nrwl.io`

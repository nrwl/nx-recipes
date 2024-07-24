# Gradle Multi Module Example Repo

This repository is a completed version of the [Spring framework](https://spring.io/)'s guide for [Multi-Module Projects](https://spring.io/guides/gs/multi-module).  It is intended for use as a starting point to show how to [add Nx to a Gradle repository](https://nx.dev/getting-started/tutorials/gradle-tutorial).

The repository contains 2 projects:

- The main `application` project which contains the Spring `DemoApplication`
- A `library` project which contains a Service used in the `DemoApplication`

You can see the above 2 projects by running `./gradlew projects`

```text {% command="./gradlew projects" %}
> Task :projects

------------------------------------------------------------
Root project 'gradle-tutorial'
------------------------------------------------------------

Root project 'gradle-tutorial'
+--- Project ':application'
\--- Project ':library'

```

## Add Nx

To see how Nx can improve the developer experience in a Gradle repository, follow the [Gradle tutorial](https://nx.dev/getting-started/tutorials/gradle-tutorial) on nx.dev.

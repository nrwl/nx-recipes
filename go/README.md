# Go with Nx

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)

An example repository showing how to use [Go](https://go.dev/) with [Nx](https://nx.dev).

## What's inside

This repositry contains:
- A Go Todo Application (API Server)
- A Go Todo Library
- Unit tests for the API Server

## How to run it

### Build 

To build the application you run this command at the root of your workspace.
```shell
npx nx build
```

### Serve

To serve the application, you run this command at the root of your workspace.
```shell
npx nx serve
```
Then you can navigate to http://localhost:8080/api/todos to your current list of todos.

All other API endpoints are at http://localhost:8080/api/todo. It uses HTTP verbs to determine the action to take. Only GET, POST, PUT, and DELETE are supported. Optionally, you can pass a query parameter `id` to specify which todo to act on.


### Test
To run the unit test for the application, you run this command at the root of your workspace.

```shell
npx nx test
```

## Learn more

- [Nx](https://nx.dev)
- [Go](https://go.dev)
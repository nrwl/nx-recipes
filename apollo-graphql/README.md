# Tutorial: Using Apollo GraphQL in an Nx Workspace

Source code for the Apollo GraphQL article on the Nx blog:
- Tutorial: https://nx.dev/blog/using-apollo-graphql-in-an-nx-workspace

## What's inside?

This example contains a GraphQL api app, a React frontend app, code generation with GraphQL Codegen that started from the `node` preset. 

```
npx create-nx-workspace@latest --preset=node nx-apolloe
```

It contains 

- an `api` application using Apollo Server: `apps/api`
- a `frontend` application using React: `apps/frontend`
- two libraries: `libs/models-graphql` which contains the GraphQL schema and generated TypeScript models and `libs/feature-sets` which has container components that fetch data for the frontend.
- Uses Graphql Codegen to generate TypeScript code from GraphQL schemas and operations

Follow through the tutorial linked above for more details.

## How to run it

Clone it locally, install all dependencies using `npm install`. You can then run commands Like

- `npx nx serve api` to serve the backend
- `npx nx serve frontend` to serve the frontend
- `npx nx run-many -t codegen` to generate code using GraphQL codegen
- you can use `npx nx graph` to visualize the structure

# Serverless + Fastify + Planetscale

[![standalone application](https://img.shields.io/static/v1?label=Nx%20setup&message=standalone%20app&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#standalone-applications)

Leverage [Fastify](https://www.fastify.io/) and [PlanetScale](https://planetscale.com/) within [Netlify serverless functions](https://www.netlify.com/products/functions/).

## What's inside?

There is a single root project that contains the Netlify serverless functions in the repo in the `functions` directory.

There is a single api function that operates as a fastify api. While you can build a full feature rich api in a serverless function, there are limitations around the resources within the function. [See Netlify function limtations](https://docs.netlify.com/functions/overview/#default-deployment-options).

### Workspace from scratch

This workspace can be created via the `@nx/netlify` preset or via adding `@nx/netlify` setup to an existing project.

Using the preset with `create-nx-workspace`

```shell
npx create-nx-workspace@latest --preset=@nx/netlify
```

Then add the specific dependencies for the fastify api.

```shell
npm i fastify @fastify/mysql @fastify/sensible @fastify/aws-lambda
```

Rename the `hello.ts` function to `api.ts`

```shell
mv functions/hello/hello.ts functions/api/api.ts
```

Update the `netlify.toml` function settings

```toml
[functions."api*"]
# any extra settings for this function can be placed here
```

## How to run it

> Note: A MySQL connection string is needed. In this example, we are using [PlanetScale](https://planetscale.com/).

1. Clone the Repo
1. Install dependencies, `npm i`
1. Rename .env.example to .env, `cp .env.example .env`
   - Add the db connection string to the .env file
1. Start the api, `npm run serve-functions`
1. Setup the database by visiting [http://localhost:8888/.netlify/functions/api](http://localhost:8888/.netlify/functions/api)
   - or use the [Postman Collection](./Nx_Fastify_PlanetScale.postman_collection.json)

All endpoints for the example are:

- [GET /.netlify/functions/api](./functions/api/api.ts#L14)
  - Get All Users
- [GET /.netlify/functions/api/users/:id](./functions/api/api.ts#L19)
  - Get User by ID
- [POST /.netlify/functions/api/users](./functions/api/api.ts#L30)
  - Create User
- [DELETE /.netlify/functions/api/users/:id](./functions/api/api.ts#L44)
  - Delete User by ID

## Learn more

- [`@nx/netlify` Deployment Video](https://www.youtube.com/watch?v=idH6GCkWq0w)
- [Netlify Serverless Functions](https://docs.netlify.com/functions/overview/)
- [Fastify Serverless](https://www.fastify.io/docs/latest/Guides/Serverless/)
- [PlanetScale](https://planetscale.com/docs)

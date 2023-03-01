# Deno Oak API

This is an example of using [Deno](https://deno.land) to build an API with the [Oak web framework](https://oakserver.github.io/oak/) in an [Nx workspace](https://nx.dev);

[Here a running example of this API](todo-api-oak-nx.deno.dev/api/todos)

## Getting Started

This project is composed of 4 projects

1. `webapp` - Deno Oak API
1. `webapp-e2e` - Cypress API Tests
1. `data-access-todos` - Interactions with the "DB"
1. `models-todo` - Typescript interfaces

## Deno Oak API

> This project is located in the `apps/webapp/` directory

This project is the API, you can run `nx serve webapp` and get the running API in your browser located at [`https://localhost:8000/api/todos`](https://localhost:8000/api/todos).

Starting in `src/main.ts` we create a new Oak application and use the routes defined in `src/routes.ts`.

`routes.ts` is where we define the API routes for our _todo_ entity.
The routes are as follow

| Method | Route           | Action                 |
| ------ | --------------- | ---------------------- |
| GET    | `api/todos`     | Get all todos          |
| GET    | `api/todos/:id` | Get todo with `:id`    |
| POST   | `api/todos`     | Create todo            |
| PATCH  | `api/todos/:id` | Update todo with `:id` |
| DELETE | `api/todos/:id` | Delete todo with `:id` |

The route handlers use the functions exposed via the `data-access-todos` library

## In Memory DB

> This project is located in the `libs/data-access-todos/` directory

For simplicity, we are using just an in memory `Map` to hold our data. This collection is lost every time the server restarts. This is especially previalnt when deploying on the edge like we will do later with [Deno Deploy](https://deno.com/deploy)

This library contains the functionaliy to create, read, update, and delete (or CRUD) items in _database_.

> A good _next step_ would be to connect this with a presistant data base like [Postgres via Supabase](https://deno.com/deploy/docs/tutorial-postgres)

## Sharing Models

> This project is located in the `libs/model-todo/` directory

We also in the future might need to share these TypeScript types for our `ToDo` model, so we can pull that out into it's own library for simple reusability.

While not needed since the model can be declared within a single file, We use both a Deno and Node entrypoint file to keep our API surface cleaner for future runtime specific expansions. Both imports are defined in the root tsconfig and import map.

Deno supports the [import map standard](https://deno.land/manual@v1.31.0/basics/import_maps) which Nx can leverage to provide similar imports you'd expect with node_modules and conventions within Nx.

If you end up wanting to share code with deno and node, paths will have to be declared within the import map and the root tsconfig. You will also need to set different 'entrypoints' for node vs deno because Deno requires the extension in the imports while node does not. i.e.

```ts
// in deno
import { myFancyFunction } from './my-helpers.ts';

// in node
import { myFancyFunction } from './my-helpers';
```

> In the future this might not be the case with newer versions of TypeScript, but today it will be needed.

### Testing

> This project is located in the `apps/webapp-e2e/` directory

Lastly, we have some API tests to assert our desired behaviors and catch any regression tests.

These are standard cypress tests that make a request to the API and assert the response back.

When working with the tests locally, you can run into an issue where the _database_ does not clear so you have data from previous tests in the other tests.

A couple approches can be taken, mainly you should only assert the responses you get back instead of requerying the API.

If you do need to make sure no side effects are present with the data, then you'll want to make sure to clear out any data before each test runs.

## Deploying to the Edge

> You will need to [install the deployctl CLI tool](https://deno.com/deploy/docs/deployctl#deployctl-cli)

Leveraging [Deno Deploy](https://deno.com/deploy), we can deploy the `webapp` project to the edge in just seconds.

There are 2 ways to use Deno Deploy.

1. Git integration
2. CLI

We will be using the CLI to deploy this app, but the [git integration is even simpler](https://deno.com/deploy/docs/deployments#git-integration) and would recommend if your workspace permits it.

First you need to setup an "Empty" project in Deno Deploy. [Consult the docs for the most up to date information](https://deno.com/deploy/docs/projects#creating-a-project)

But simply, on the new project screen, there is a button to click to create a new empty project.
Once that project is created, you can rename it to whatever name you prefer.

https://user-images.githubusercontent.com/23272162/222194294-0d376c7b-2d53-4539-99b5-62cd37dd2d3e.mp4

You will also need a deploy token to give to the `deployctl` CLI.

This can be done in via in the [Access Token page](https://dash.deno.com/account#access-tokens)

Set this as an env var called `DENO_DEPLOY_TOKEN`

You can see the cli command to deploy the `webapp` in the [`project.json`](/apps/webapp/project.json) _deploy_ target.

This way you can run `nx deploy webapp` and not have to remember all the args needed.

The command is

```shell
deployctl deploy --project=<Your-Project-Name> --import-map=import_map.json --exclude=node_modules --prod apps/webapp/src/main.ts
```

where `<Your-Project-Name>` is the name set for the Deno Deploy project that was created eariler.

You can do a deployment dry run by running `nx deploy webapp`

To deploy a preview of the site
`nx deploy webapp --configuration=preview`

To deploy directly to production
`nx deploy webapp --configuration=production`

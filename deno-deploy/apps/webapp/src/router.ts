import { Router } from 'oak';
import {
  getTodos,
  getTodoById,
  deleteTodo,
  createTodo,
  updateTodo,
} from '@deno-deploy/data-access-todos';

const router = new Router();

router
  .get('/api/todos', (ctx) => {
    if (getTodos()?.length === 0) {
      createTodo({
        title: 'Check out Deno with Nx',
        description:
          'Take a look at https://github.com/nrwl/nx-recipes/tree/main/deno-deploy!',
        done: false,
      });
    }
    ctx.response.body = getTodos();
    ctx.response.type = 'application/json';
  })
  .get('/api/todos/:id', (ctx) => {
    const todo = getTodoById(ctx.params.id);
    if (todo) {
      ctx.response.body = todo;
      ctx.response.type = 'application/json';
    } else {
      ctx.throw(404, `Unable to find Todo with id ${ctx.params.id}`);
    }
  })
  .patch('/api/todos/:id', async (ctx) => {
    const {
      title,
      description = null,
      done = false,
    } = await ctx.request.body().value;
    const todo = updateTodo(ctx.params.id, { title, description, done });
    if (todo) {
      ctx.response.body = todo;
      ctx.response.type = 'application/json';
    } else {
      ctx.throw(404, `Unable to find Todo with id ${ctx.params.id}`);
    }
  })
  .post('/api/todos', async (ctx) => {
    const { title, description = '' } = await ctx.request.body().value;
    const todo = createTodo({ title, description, done: false });
    ctx.response.body = todo;
    ctx.response.type = 'application/json';
  })
  .delete('/api/todos/:id', (ctx) => {
    const todo = deleteTodo(ctx.params.id);
    if (todo) {
      ctx.response.body = todo;
      ctx.response.type = 'application/json';
    } else {
      ctx.throw(404, `Unable to find Todo with id ${ctx.params.id}`);
    }
  });

export const routes = router.routes();
export const allowedMethods = router.allowedMethods();

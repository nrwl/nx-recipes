import { component$, useContext, useTask$ } from '@builder.io/qwik';
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from '@builder.io/qwik-city';
import { addTodo, getTodos, TodoContext } from '@acme/data-access';

export const useGetTodos = routeLoader$(() => getTodos());

export const useAddTodo = routeAction$(
  (todo) => addTodo(todo),
  zod$({ id: z.string(), message: z.string() })
);

export default component$(() => {
  const todoStore = useContext(TodoContext);
  const persistedTodos = useGetTodos();
  const addTodoAction = useAddTodo();

  useTask$(({ track }) => {
    track(() => persistedTodos.value);
    if (persistedTodos.value) {
      todoStore.todos = persistedTodos.value.todos;
      todoStore.lastId =
        todoStore.lastId > persistedTodos.value.lastId
          ? todoStore.lastId
          : persistedTodos.value.lastId;
    }
  });

  return (
    <div>
      <h1>Todos</h1>
      {todoStore.todos.map((t) => (
        <div key={`todo-${t.id}`}>
          <label>
            <input type="checkbox" /> {t.message}
          </label>
        </div>
      ))}
      <Form action={addTodoAction}>
        <input type="hidden" name="id" value={todoStore.lastId + 1} />
        <input type="text" name="message" />
        <button type="submit">Add</button>
      </Form>
      {addTodoAction.value?.success && <p>Todo added!</p>}
    </div>
  );
});

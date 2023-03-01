import { ToDo } from '@deno-deploy/model-todos';

const todos = new Map<string, ToDo>();
let count = 0;

export function getTodos(): ToDo[] {
  return Array.from(todos.values());
}

export function getTodoById(id: string) {
  return todos.get(id);
}

export function createTodo(todo: Omit<ToDo, 'id'>) {
  count++;
  const id = `${count}`;
  todos.set(id, { id, ...todo });
  return todos.get(id);
}
export function updateTodo(id: string, todo: Partial<Omit<ToDo, 'id'>>) {
  const existingTodo = getTodoById(id);
  if (existingTodo) {
    todos.set(id, {
      id,
      title: todo.title || existingTodo.title,
      description: todo.description || existingTodo.description,
      done: todo.done || existingTodo.done,
    });
  }
  return getTodoById(id);
}

export function deleteTodo(id: string) {
  todos.delete(id);
  return { id };
}

export function clearAllTodos() {
  todos.clear();
  count = 0;
}

import { db, Todo } from './api';

export function getTodos() {
  // A network request or db connection could be made here to fetch persisted todos
  // For illustrative purposes, we're going to seed a rudimentary in-memory DB if it hasn't been already
  // Then return the value from it
  if (db.get('todos')?.length === 0) {
    db.set('todos', [
      {
        id: 1,
        message: 'First todo',
      },
    ]);
  }
  const todos: Todo[] = db.get('todos');
  const lastId = [...todos].sort((a, b) => b.id - a.id)[0].id;
  return { todos, lastId };
}

export function addTodo(todo: { id: string; message: string }) {
  const success = db.add('todos', {
    id: parseInt(todo.id),
    message: todo.message,
  });
  return { success };
}

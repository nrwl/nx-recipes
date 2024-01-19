import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { Todo } from './api';

interface TodoStore {
  todos: Todo[];
  lastId: number;
}
export const TodoContext = createContextId<TodoStore>('todo.context');

export const TodoContextProvider = component$(() => {
  const todoStore = useStore<TodoStore>({
    todos: [],
    lastId: 0,
  });

  useContextProvider(TodoContext, todoStore);

  return <Slot />;
});

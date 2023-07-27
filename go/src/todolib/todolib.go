package todolib

import (
    "sync"
)

type Todo struct {
    ID        int    `json:"id"`
    Title     string `json:"title"`
    Completed bool   `json:"completed"`
}

type TodoStore struct {
    mu    sync.RWMutex
    todos map[int]Todo
    counter int
}

func NewTodoStore() *TodoStore {
    return &TodoStore{
        todos: make(map[int]Todo),
        counter: 1,
    }
}

func (ts *TodoStore) Create(todo Todo) int {
    ts.mu.Lock()
    defer ts.mu.Unlock()

    todo.ID = ts.counter
    ts.todos[todo.ID] = todo
    ts.counter++
    return todo.ID
}

func (ts *TodoStore) Read(id int) (Todo, bool) {
    ts.mu.RLock()
    defer ts.mu.RUnlock()

    todo, exists := ts.todos[id]
    return todo, exists
}

func (ts *TodoStore) Update(id int, updatedTodo Todo) bool {
    ts.mu.Lock()
    defer ts.mu.Unlock()

    if _, exists := ts.todos[id]; !exists {
        return false
    }

    updatedTodo.ID = id
    ts.todos[id] = updatedTodo
    return true
}

func (ts *TodoStore) Delete(id int) bool {
    ts.mu.Lock()
    defer ts.mu.Unlock()

    if _, exists := ts.todos[id]; !exists {
        return false
    }

    delete(ts.todos, id)
    return true
}

func (ts *TodoStore) List() []Todo {
    ts.mu.RLock()
    defer ts.mu.RUnlock()

    todos := make([]Todo, 0, len(ts.todos))
    for _, todo := range ts.todos {
        todos = append(todos, todo)
    }
    return todos
}
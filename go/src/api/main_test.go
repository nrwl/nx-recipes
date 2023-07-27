package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"
    "nx-recipes/go/todolib"
)

func TestCreateTodoHandler(t *testing.T) {
    todoStore = todolib.NewTodoStore()

    todo := todolib.Todo{Title: "Test Todo", Completed: false}
    todoJSON, _ := json.Marshal(todo)
    req, err := http.NewRequest("POST", "/api/todo/create", bytes.NewReader(todoJSON))
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    http.HandlerFunc(createTodoHandler).ServeHTTP(rr, req)

    if rr.Code != http.StatusCreated {
        t.Errorf("Expected status code %d, got %d", http.StatusCreated, rr.Code)
    }

    // You can add more assertions to verify the response body, etc.
}

// Write similar test functions for other handlers like getTodoHandler, updateTodoHandler, etc.

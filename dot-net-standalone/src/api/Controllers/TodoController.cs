using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Api.Data.TodoContext;
using Api.Models.TodoItem;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private readonly TodoContext _context;

    public TodoController(TodoContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<TodoItem>> GetTodos()
    {
        var items = _context.TodoItems.ToList();
        return Ok(items);
    }

    [HttpPost]
    public ActionResult<TodoItem> AddTodo(TodoItem todoItem)
    {
        _context.TodoItems.Add(todoItem);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetTodos), new { id = todoItem.Id }, todoItem);
    }

    // ... Add more actions like Update, Delete, etc.
}

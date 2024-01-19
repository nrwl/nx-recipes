using Microsoft.EntityFrameworkCore;
using Api.Models.TodoItem;

namespace Api.Data.TodoContext;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options) : base(options)
    {
    }

    public DbSet<TodoItem> TodoItems { get; set; }
}



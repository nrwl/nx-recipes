using System.Collections.Generic;
using NUnit.Framework;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api.Data.TodoContext;
using Api.Models.TodoItem;
using Api.Controllers;

namespace Src.Api.Test;

[TestFixture]
public class TodoControllerTests
{
    private TodoController? _controller;
    private TodoContext? _context;

    [SetUp]  // Setup resources before each test
    
    public void Setup()
    {
        var options = new DbContextOptionsBuilder<TodoContext>()
            .UseInMemoryDatabase(databaseName: "TodoTestDb")
            .Options;

        _context = new TodoContext(options);
        _controller = new TodoController(_context);
    }

    [Test]
    public void GetTodos_ReturnsAllItems()
    {
        // Arrange
        var todoItems = new List<TodoItem>
        {
            new TodoItem { Id = 1, Name = "Test1", IsComplete = false },
            new TodoItem { Id = 2, Name = "Test2", IsComplete = false }
        };

        foreach (var item in todoItems)
        {
            _context.TodoItems.Add(item);
        }
        _context.SaveChanges();

        // Act
        var result = _controller.GetTodos();

        // Assert
        Assert.NotNull(result);

        var actionResult = result as ActionResult<IEnumerable<TodoItem>>;
        Assert.NotNull(actionResult);

        var returnValue = actionResult?.Result as OkObjectResult;
        Assert.NotNull(returnValue);

        var items = returnValue?.Value as List<TodoItem>;
        Assert.NotNull(items);
        Assert.AreEqual(todoItems.Count, items?.Count);

        // Clean up the data to ensure isolation for the next test
        _context.Database.EnsureDeleted();
    }

    [TearDown]  // Clean-up resources after each test
    public void TearDown()
    {
        _context.Dispose();
    }
}

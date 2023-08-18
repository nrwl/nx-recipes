// var builder = WebApplication.CreateBuilder(args);
// var app = builder.Build();


// app.Run();

using Microsoft.EntityFrameworkCore;
using Api.Data.TodoContext;

var builder = WebApplication.CreateBuilder(args);

// Add services to the DI container.
builder.Services.AddDbContext<TodoContext>(opt => opt.UseInMemoryDatabase("TodoList"));
builder.Services.AddControllers();

var app = builder.Build();
app.MapGet("/", () => "Hello World!");

// Middleware and routing configuration
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
use actix_web::{App, HttpServer};

use cats::{create_cat_data, create_cat_scope};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  // HttpServer:new creates multiple threads to handle requests.
  // We need to make sure that the shared cat data is created once before the HttpServer
  // We can then pass this reference to the create_cat_scope so that all threads have access to the same data
  let cat_data = create_cat_data();
  HttpServer::new(move || App::new().service(create_cat_scope(&cat_data)))
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}

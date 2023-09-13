use std::collections::HashSet;
use std::sync::Mutex;

use actix_web::web::*;
use actix_web::{get, post, HttpResponse, Responder, Scope};

pub struct Cats {
  cats: Mutex<HashSet<Cat>>,
}

#[derive(Eq, Hash, PartialEq, Clone, Debug, serde::Deserialize, serde::Serialize)]
struct Cat {
  name: String,
  age: u8,
}

#[get("")]
async fn get_cats(data: Data<Cats>) -> impl Responder {
  let cats = data.cats.lock().unwrap();

  println!("Cats {:?}", &cats);

  Json(cats.clone())
}

#[post("/add")]
async fn add_cat(cat: Json<Cat>, data: Data<Cats>) -> impl Responder {
  let mut cats = data.cats.lock().unwrap();

  println!("Adding {:?}", &cat);

  cats.insert(cat.into_inner());

  HttpResponse::Ok()
}

pub fn create_cat_data() -> Data<Cats> {
  Data::new(Cats {
    cats: Mutex::new(HashSet::new()),
  })
}

pub fn create_cat_scope(data: &Data<Cats>) -> Scope {
  scope("/cats")
    // Cloning is cheap here because internally, Data uses `Arc`
    .app_data(Data::clone(data))
    .service(add_cat)
    .service(get_cats)
}

#[cfg(test)]
mod tests {
  #[test]
  fn it_works() {
    let result = 2 + 2;
    assert_eq!(result, 4);
  }
}

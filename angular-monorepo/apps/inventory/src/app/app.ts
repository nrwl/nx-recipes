import { Component } from '@angular/core';
import { ProductList } from '@angular-monorepo/products';

@Component({
  imports: [ProductList],
  selector: 'angular-monorepo-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'inventory';
}

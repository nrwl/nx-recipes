import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

// This import is not allowed 👇
import { OrderListComponent } from '@angular-monorepo/orders';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductsModule {}

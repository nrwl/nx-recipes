import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
      },
    ]),
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductsModule {}

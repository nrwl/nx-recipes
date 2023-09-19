import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderListComponent,
      },
    ]),
  ],
  declarations: [OrderListComponent],
  exports: [OrderListComponent],
})
export class OrdersModule {}

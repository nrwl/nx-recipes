import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderListComponent],
  exports: [OrderListComponent],
})
export class OrdersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class ClientUiFooterModule {}

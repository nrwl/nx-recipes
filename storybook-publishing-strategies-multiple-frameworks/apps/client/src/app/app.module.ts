import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ClientUiHeaderModule } from '@publishing-strategies-multiple-frameworks/client/ui/header';
import { ClientUiFooterModule } from '@publishing-strategies-multiple-frameworks/client/ui/footer';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientUiHeaderModule, ClientUiFooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

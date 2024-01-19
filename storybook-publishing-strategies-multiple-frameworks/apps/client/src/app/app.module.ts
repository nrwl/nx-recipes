import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientUiFooterModule } from '@storybook-publishing-strategies-multiple-frameworks/client-ui-footer';
import { ClientUiHeaderModule } from '@storybook-publishing-strategies-multiple-frameworks/client-ui-header';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientUiFooterModule, ClientUiHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

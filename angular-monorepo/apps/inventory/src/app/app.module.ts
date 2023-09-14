import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from '@angular-monorepo/products';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

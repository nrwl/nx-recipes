import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppButtonComponent } from './app-button/app-button.component';
import { MyBtnModule } from '@storybook-compodoc-angular/my-btn';
@NgModule({
  declarations: [AppComponent, AppButtonComponent],
  imports: [BrowserModule, MyBtnModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

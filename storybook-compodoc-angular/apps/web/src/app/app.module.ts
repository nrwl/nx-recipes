import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButnComponent } from './butn/butn.component';
import { MyBtnModule } from '@storybook-compodoc-angular/my-btn';

@NgModule({
  declarations: [AppComponent, ButnComponent],
  imports: [BrowserModule, MyBtnModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShopComponent } from './shop/shop.component';
import { CartModule, CartComponent } from '@store/cart';
import { UiModule } from '@store/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShopComponent],
  imports: [
    BrowserModule,
    CartModule,
    UiModule,
    RouterModule.forRoot([
      { path: '/', component: ShopComponent },
      { path: '/cart', component: CartComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@angular-monorepo/products').then((m) => m.ProductsModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('@angular-monorepo/orders').then((m) => m.OrdersModule),
  },
];

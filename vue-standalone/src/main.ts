import './styles.css';

import { createApp } from 'vue';
import App from './app/App.vue';
import NxWelcome from './app/NxWelcome.vue';
import * as VueRouter from 'vue-router';

const routes = [
  { path: '/', component: NxWelcome },
  {
    path: '/products',
    component: () => import('@myvueapp/products').then((m) => m.Products),
  },
  {
    path: '/orders',
    component: () => import('@myvueapp/orders').then((m) => m.Orders),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#root');

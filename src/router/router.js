import { createRouter, createWebHistory } from 'vue-router';

import Admin from '../views/Admin.vue';
import Cart from '../views/Cart.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin },
  { path: '/cart', component: Cart },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;

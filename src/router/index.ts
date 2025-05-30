import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../../Views/HomeView.vue';
import TaskFormView from '../../Views/TaskFormView.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../Views/AboutView.vue')
  },
  {
    path: '/add',
    name: 'AddTask',
    component: TaskFormView  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
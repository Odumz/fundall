import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "@/config/nprogress";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: {
      title: 'Login'
    },
  },
  {
    path: '/create-an-account',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue'),
    meta: {
      title: 'Register'
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Index.vue'),
    meta: {
      title: 'Dashboard'
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  // When switching pages, scroll to the top
  scrollBehavior: () => ({ left: 0, top: 0, smooth: true }),
});

// Injection Progress
router.beforeEach((to) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }

  const token:any = localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (!token) {
      router.push({ name: 'Login' })
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

router.beforeEach((to, from, next) => {
  document.title = `Fundall - Expense Tracker | ${to.meta.title}`;
  next();
})

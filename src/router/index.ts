import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "@/config/nprogress";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'Home'
    },
  }
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/layout/index.vue'),
//     children: [
//       {
//         path: '',
//         name: 'Landing',
//         component: () => import('@/views/Home.vue'),
//         meta: {
//           title: 'Home'
//         },
//       },
//       {
//         path: '/our-best-works',
//         name: 'OurWorks',
//         component: () => import('@/views/Portfolio.vue'),
//         children: [
//           {
//             path: '',
//             name: 'Portfolio',
//             component: () => import('@/components/portfolio.vue'),
//             meta: {
//               title: 'Portfolio - Our best works.'
//             },
//           },
//           {
//             path: 'animations',
//             children:[
//               {
//                 path: '',
//                 name: 'Animation',
//                 component: () => import('@/components/animation.vue'),
//                 meta: {
//                   title: 'Animations - Our best works.'
//                 },
//               },
//               {
//                 path: 'article',
//                 name: 'Article',
//                 component: () => import('@/components/article.vue'),
//                 meta: {
//                   title: 'Animations - Our best works.'
//                 },
//               },
//             ]
//           },
//           {
//             path: 'illustrations',
//             name: 'Illustration',
//             component: () => import('@/components/illustration.vue'),
//             meta: {
//               title: 'Illustrations - Our best works.'
//             },
//           },
//           {
//             path: 'branding',
//             name: 'Branding',
//             component: () => import('@/components/branding.vue'),
//             meta: {
//               title: 'Branding - Our best works.'
//             },
//           },
//         ]
//       },
//       {
//         path: '/what-we-do',
//         name: 'Service',
//         component: () => import('@/views/Service.vue'),
//         meta: {
//           title: 'Services'
//         },
//       },
//       {
//         path: '/connect-with-symphonii-studios',
//         name: 'Contact',
//         component: () => import('@/views/Contact.vue'),
//         meta: {
//           title: 'Contact Us'
//         },
//       },
//       {
//         path: '/about-symphonii-studios',
//         name: 'About',
//         component: () => import('@/views/About.vue'),
//         meta: {
//           title: 'About Us'
//         },
//       },
//       // {
//       //   path: '/comic',
//       //   name: 'Comic',
//       //   component: () => import('@/views/Comic.vue'),
//       //   meta: {
//       //     title: 'Comic Us'
//       //   },
//       // },
//     ]
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'Error',
//     component: () => import('@/views/ErrorPage.vue'),
//     meta: { requiresAuth: false },
//   },
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
  document.title = `Upstore | ${to.meta.title}`;
  next();
})

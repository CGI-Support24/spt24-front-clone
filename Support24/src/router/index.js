import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/base',
        name: 'Base',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/base/breadcrumbs',
        children: [
          {
            path: '/base/SPno2',
            name: '%%지원',
            component: () => import('@/views/Support Type/SPno2.vue'),
          },
          {
            path: '/base/SPno1',
            name: '@@지원',
            component: () => import('@/views/Support Type/SPno1.vue'),
          },
          {
            path: '/base/SPno3',
            name: '정부지원',
            component: () => import('@/views/Support Type/SPno3.vue'),
          },
          {
            path: '/base/SPper',
            name: '인력지원',
            component: () => import('@/views/Support Type/SPper.vue'),
          },
          {
            path: '/base/SPplace',
            name: '장소지원',
            component: () => import('@/views/Support Type/SPplace.vue'),
          },
          {
            path: '/base/SPtec',
            name: '기술지원',
            component: () => import('@/views/Support Type/SPtec.vue'),
          },
        ],
      },
      {
        path: '/custom/Supportex',
        name: '나에게맞는지원사업찾기',
        component: () => import('@/views/custom/Supportex.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/Question/ManyQnA',
        children: [
          {
            path: '/Question/ManyQnA',
            name: 'ManyQnA',
            component: () => import('@/views/Question/ManyQnA.vue'),
          },
          {
            path: '/Question/none',
            name: '빈페이지',
            component: () => import('@/views/Question/none.vue'),
          },
        ],
      },
      {
        path: '/Supportnotice/Supportnotice',
        name: '지원사업페이지',
        component: () => import('@/views/Supportnotice/Supportnotice.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router

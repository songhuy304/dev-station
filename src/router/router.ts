import { LayoutDashboardIcon } from 'lucide-vue-next'
import { createRouter, createWebHistory } from 'vue-router'
import { APP_PATH } from './base-router'
import * as Page from '@/pages'

const routes = [
  { path: APP_PATH.HOME, component: Page.HomePage, incon: LayoutDashboardIcon, name: 'Home' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router, routes }

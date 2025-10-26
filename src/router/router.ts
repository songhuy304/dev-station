import {
  BookOpenIcon,
  ClipboardListIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  UserCheckIcon,
} from 'lucide-vue-next'
import { createRouter, createWebHistory } from 'vue-router'
import { APP_PATH } from './base-router'
import * as Page from '@/pages'
import { APP_NAME } from '@/shared/constants'
import { i18n } from '@/shared/i18n/i18n'

const routes = [
  {
    path: APP_PATH.HOME,
    component: Page.HomePage,
    icon: LayoutDashboardIcon,
    name: 'home',
  },
  {
    path: APP_PATH.COURSES,
    component: Page.HomePage,
    icon: BookOpenIcon,
    name: 'courses',
  },
  {
    path: APP_PATH.INTERVIEWS,
    component: Page.HomePage,
    icon: UserCheckIcon,
    name: 'interviews',
  },
  {
    path: APP_PATH.PROJECTS,
    component: Page.HomePage,
    icon: ClipboardListIcon,
    name: 'projects',
  },
  {
    path: APP_PATH.QUIZZES,
    component: Page.HomePage,
    icon: FileTextIcon,
    name: 'quizzes',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const routeName = to.name as string
  const translatedTitle = routeName ? i18n.global.t(`app.${routeName}`) : i18n.global.t('app.home')
  document.title = `${translatedTitle} | ${APP_NAME}`
})
export { router, routes }

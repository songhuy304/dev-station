import * as Page from '@/pages'
import { APP_NAME } from '@/shared/constants'
import { i18n } from '@/shared/i18n/i18n'
import { createRouter, createWebHistory } from 'vue-router'
import { APP_PATH } from './base-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: APP_PATH.HOME,
      component: Page.HomePage,
      name: 'home',
      meta: { title: 'home' },
    },
    {
      path: APP_PATH.COURSES,
      component: Page.CoursesPage,
      name: 'courses',
      meta: { title: 'courses' },
    },
    {
      path: APP_PATH.INTERVIEWS,
      component: Page.InterviewsPage,
      name: 'interviews',
      meta: { title: 'interviews' },
    },
    {
      path: APP_PATH.PROJECTS,
      component: Page.ProjectsPage,
      name: 'projects',
      meta: { title: 'projects' },
    },
    {
      path: APP_PATH.QUIZZES.base,
      component: Page.QuizzesPage,
      name: 'quizzes',
      meta: { title: 'quizzes' },
    },
  ],
})

router.afterEach((to) => {
  const routeName = to.name as string
  const translatedTitle = routeName ? i18n.global.t(`app.${routeName}`) : i18n.global.t('app.home')
  document.title = `${translatedTitle} | ${APP_NAME}`
})
export { router }

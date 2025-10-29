import { LayoutDashboard, type LucideIcon } from 'lucide-vue-next'

type AuthModalType = 'login' | 'register' | 'reset' | 'forgot'

const AUTH_MODAL_QUERY_KEY = 'auth'

const APP_PATH = {
  HOME: '/',
  COURSES: '/courses',
  QUIZZES: '/quizzes',
  INTERVIEWS: '/interviews',
  PROJECTS: '/projects',
}

interface ISideBar {
  title: string
  path: string
  icon: LucideIcon
  isActive?: boolean
  items?: ISideBar[]
}

const SIDEBAR_ITEMS: ISideBar[] = [
  {
    path: APP_PATH.HOME,
    icon: LayoutDashboard,
    title: 'home',
    items: [
      {
        path: APP_PATH.HOME,
        icon: LayoutDashboard,
        title: 'hehehe',
      },
    ],
  },
  {
    path: APP_PATH.COURSES,
    icon: LayoutDashboard,
    title: 'courses',
  },
  {
    path: APP_PATH.INTERVIEWS,
    icon: LayoutDashboard,
    title: 'interviews',
  },
  {
    path: APP_PATH.PROJECTS,
    title: 'projects',
    icon: LayoutDashboard,
  },
  {
    path: APP_PATH.QUIZZES,
    title: 'quizzes',
    icon: LayoutDashboard,
  },
]

export { APP_PATH, AUTH_MODAL_QUERY_KEY, SIDEBAR_ITEMS, type AuthModalType }

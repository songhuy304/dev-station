import {
  BookOpen,
  Brain,
  Code2,
  HelpCircle,
  LayoutDashboard,
  type LucideIcon,
} from 'lucide-vue-next'

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
  },
  {
    path: APP_PATH.COURSES,
    icon: BookOpen,
    title: 'courses',
  },
  {
    path: APP_PATH.INTERVIEWS,
    icon: HelpCircle,
    title: 'interviews',
  },
  {
    path: APP_PATH.PROJECTS,
    icon: Code2,
    title: 'projects',
  },
  {
    path: APP_PATH.QUIZZES,
    icon: Brain,
    title: 'quizzes',
  },
]

export { APP_PATH, AUTH_MODAL_QUERY_KEY, SIDEBAR_ITEMS, type AuthModalType }

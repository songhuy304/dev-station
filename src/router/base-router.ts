import type { ISideBar } from '@/shared/types'
import {
  BookOpen,
  Brain,
  FolderOpen,
  HelpCircle,
  LayoutDashboard,
  ListChecks,
  Trophy,
} from 'lucide-vue-next'

export const quiz_path = () => {
  return {
    base: '/quizzes',
    leaderboard: '/quizzes/leaderboard',
    myQuizzes: '/quizzes/my-quizzes',
    detail: '/quizzes/:id',
  }
}

const APP_PATH = {
  HOME: '/',
  COURSES: '/courses',
  QUIZZES: quiz_path(),
  INTERVIEWS: '/interviews',
  PROJECTS: '/projects',
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
    icon: Brain,
    title: 'quizzes',
    items: [
      {
        path: APP_PATH.QUIZZES.base,
        icon: FolderOpen,
        title: 'all-quizzes',
      },
      {
        path: APP_PATH.QUIZZES.myQuizzes,
        icon: ListChecks,
        title: 'my-quizzes',
      },
      {
        path: APP_PATH.QUIZZES.leaderboard,
        icon: Trophy,
        title: 'leaderboard',
      },
    ],
  },
]

export { APP_PATH, SIDEBAR_ITEMS }

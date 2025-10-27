type AuthModalType = 'login' | 'register' | 'reset' | 'forgot'

const AUTH_MODAL_QUERY_KEY = 'auth'

const APP_PATH = {
  HOME: '/',
  COURSES: '/courses',
  QUIZZES: '/quizzes',
  INTERVIEWS: '/interviews',
  PROJECTS: '/projects',
}

export { APP_PATH, AUTH_MODAL_QUERY_KEY, type AuthModalType }

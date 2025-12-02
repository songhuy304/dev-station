export const QuizManagement = () => {
  return {
    getQuizzes: '/quizzes',
    getQuiz: (id: string) => `/quizzes/${id}`,
    createQuiz: '/quizzes',
    updateQuiz: (id: string) => `/quizzes/${id}`,
    deleteQuiz: (id: string) => `/quizzes/${id}`,
  }
}

export const userEndpoints = () => {
  const base = 'user'

  return {
    logout: `${base}/logout`,
    me: `${base}/me`,
  }
}

export const apiEndpoints = {
  login: '/auth/login',
  register: '/auth/register',

  quiz: QuizManagement(),
  user: userEndpoints(),
}

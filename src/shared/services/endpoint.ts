export const QuizManagement = () => {
  return {
    getQuizzes: '/quizzes',
    getQuiz: (id: string) => `/quizzes/${id}`,
    createQuiz: '/quizzes',
    updateQuiz: (id: string) => `/quizzes/${id}`,
    deleteQuiz: (id: string) => `/quizzes/${id}`,
  }
}

export const apiEndpoints = {
  login: '/auth/login',
  register: '/auth/register',
  me: '/auth/me',

  quiz: QuizManagement(),
}

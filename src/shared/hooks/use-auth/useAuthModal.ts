import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/shared/stores'
import { AUTH_MODAL_QUERY_KEY, type AuthModalType } from '@/router'

export const useAuthModal = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const route = useRoute()

  const isLogin = computed(() => userStore.isLogin)

  const currentModal = computed<AuthModalType | null>(() => {
    const authQuery = route.query[AUTH_MODAL_QUERY_KEY]
    if (typeof authQuery === 'string' && authQuery) {
      return authQuery as AuthModalType
    }
    return null
  })

  const showLogin = computed(() => currentModal.value === 'login')
  const showRegister = computed(() => currentModal.value === 'register')
  const showReset = computed(() => currentModal.value === 'reset')
  const showForgot = computed(() => currentModal.value === 'forgot')

  const requireLogin = () => {
    if (!isLogin.value) {
      openModal('login')
      return
    }
  }

  const openModal = (type: AuthModalType) => {
    router.push({
      query: {
        ...route.query,
        [AUTH_MODAL_QUERY_KEY]: type,
      },
    })
  }

  const closeModal = () => {
    const newQuery = { ...route.query }
    delete newQuery[AUTH_MODAL_QUERY_KEY]
    router.replace({ query: newQuery })
  }

  return {
    isLogin,
    requireLogin,
    openModal,
    closeModal,

    showRegister,
    showLogin,
    showReset,
    showForgot,
  }
}

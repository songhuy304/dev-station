import { defineStore } from 'pinia'
import type { IUser } from '@/shared/types'
import { LocalStorageHelper } from '../utils'

interface UserStoreState {
  profile: IUser | null
  isAuthenticated: boolean
}

const isAuthenticatedLocal = LocalStorageHelper.getItem<boolean>('isAuthenticated') === true

export const useUserStore = defineStore('user', {
  state: (): UserStoreState => ({
    profile: null,
    isAuthenticated: isAuthenticatedLocal ?? false,
  }),

  actions: {
    setProfile(payload: IUser) {
      this.profile = payload
    },
    setLogin() {
      this.isAuthenticated = true
    },
    logout() {
      this.profile = null
      this.isAuthenticated = false
    },
  },

  getters: {
    getProfile: (state) => state.profile,
    isLogin: (state) => state.isAuthenticated,
  },
})

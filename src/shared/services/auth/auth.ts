import type { IAuthTokenResponse, ILoginPayload, IRegisterPayload, IUser } from '@/shared/types'
import { api } from '../../lib/axios'
import { apiEndpoints } from '../endpoint'

export const authService = {
  async login(payload: ILoginPayload) {
    const response = await api.post<IAuthTokenResponse>(apiEndpoints.login, payload)
    return response.data
  },

  async register(payload: IRegisterPayload) {
    return (await api.post<void>(apiEndpoints.register, payload)).data
  },

  async logout() {
    return api.delete<void>(apiEndpoints.user.logout)
  },

  async getProfile() {
    return api.get<IUser>(apiEndpoints.user.me)
  },
}

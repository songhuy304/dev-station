import { api } from '../../lib/axios'
import type { IAuthTokenResponse, ILoginPayload, IRegisterPayload, IUser } from '@/shared/types'
import { apiEndpoints } from '../endpoint'

export const authService = {
  async login(payload: ILoginPayload) {
    return api.post<IAuthTokenResponse>(apiEndpoints.login, payload)
  },

  async register(payload: IRegisterPayload) {
    return api.post<IAuthTokenResponse>(apiEndpoints.register, payload)
  },

  async getProfile() {
    return api.get<IUser>(apiEndpoints.me)
  },
}

import { authService } from '@/shared/services'
import type {
  IAuthTokenResponse,
  IErrorResponse,
  ILoginPayload,
  IRegisterPayload,
} from '@/shared/types'
import { useMutation } from '@tanstack/vue-query'

export const useLogin = () => {
  const mutation = useMutation<IAuthTokenResponse, IErrorResponse, ILoginPayload>({
    mutationFn: (payload: ILoginPayload) => authService.login(payload),
  })

  return {
    ...mutation,
  }
}

export const useRegister = () => {
  return useMutation<void, IErrorResponse, IRegisterPayload>({
    mutationFn: async (payload: IRegisterPayload) => await authService.register(payload),
  })
}

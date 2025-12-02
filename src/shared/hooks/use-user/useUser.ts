import { QUERY_KEY } from '@/shared/constants'
import { authService } from '@/shared/services'
import { useUserStore } from '@/shared/stores'
import type { IErrorResponse, IUser } from '@/shared/types'
import { removeToken } from '@/shared/utils'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'

export const useGetProfile = () => {
  const userStore = useUserStore()
  return useQuery<IUser, IErrorResponse>({
    queryKey: [QUERY_KEY.profile],
    queryFn: async () => {
      const response = await authService.getProfile()
      return response.data
    },
    enabled: userStore.isAuthenticated,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const authStore = useUserStore()

  return useMutation<void, IErrorResponse, void>({
    mutationFn: async () => {
      await authService.logout()
    },
    onSuccess: () => {
      removeToken('at')
      removeToken('rft')
      queryClient.clear()
      authStore.logout()

      router.push({ name: '/', replace: true })
    },
    onError: () => {
      removeToken('at')
      removeToken('rft')
      queryClient.clear()
      authStore.logout()

      router.push({ name: '/', replace: true })
    },
  })
}

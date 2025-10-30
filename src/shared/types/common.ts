import type { LucideIcon } from 'lucide-vue-next'

export interface ISideBar {
  title: string
  path?: string
  icon: LucideIcon
  isActive?: boolean
  items?: ISideBar[]
}

export type AuthModalType = 'login' | 'register' | 'reset' | 'forgot'

export const AUTH_MODAL_QUERY_KEY = 'auth'

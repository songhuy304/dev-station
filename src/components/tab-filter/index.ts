import type { InjectionKey, Ref } from 'vue'

export interface TabFilterContext {
  current: Ref<string>
  setActive: (value: string) => void
}

export const TabFilterKey: InjectionKey<TabFilterContext> = Symbol('tabFilter')

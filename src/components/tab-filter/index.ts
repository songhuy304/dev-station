import type { InjectionKey, Ref } from 'vue'

export interface TabFilterContext {
  current: Ref<string>
  setActive: (value: string) => void
}

export const TabFilterKey: InjectionKey<TabFilterContext> = Symbol('tabFilter')

export { default as TabFilter } from './TabFilter.vue'
export { default as TabFilterItem } from './TabFilterItem.vue'

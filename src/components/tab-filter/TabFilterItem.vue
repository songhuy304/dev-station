<script setup lang="ts">
import { cn } from '@/shared/lib'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { inject, type HTMLAttributes } from 'vue'
import { TabFilterKey } from './index'

interface Props extends PrimitiveProps {
  value: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const tabFilter = inject(TabFilterKey)

if (!tabFilter) {
  throw new Error('TabFilterItem phải được dùng bên trong TabFilter')
}

// const isActive = computed(() => tabFilter.current.value === props.value)

const onClick = () => {
  tabFilter.setActive(props.value)
}
</script>

<template>
  <Primitive @click="onClick" :as-child="asChild" :as="as" :class="cn(props.class)">
    <slot />
  </Primitive>
</template>

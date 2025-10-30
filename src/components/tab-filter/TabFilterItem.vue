<script setup lang="ts">
import { cn } from '@/shared/lib'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { computed, inject, type HTMLAttributes } from 'vue'
import { TabFilterKey } from './index'
import { motion } from 'motion-v'
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

const isActive = computed(() => tabFilter.current.value === props.value)

const onClick = () => {
  tabFilter.setActive(props.value)
}
</script>

<template>
  <Primitive
    @click="onClick"
    :as-child="asChild"
    :as="as"
    :class="
      cn(
        'inline-flex h-[calc(100%-1px)] z-1 relative cursor-pointer flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-3 min-w-20 py-1 text-sm font-medium whitespace-nowrap transition duration-300',
        isActive && 'text-foreground',
        props.class,
      )
    "
  >
    <slot />
    <motion.span
      v-if="isActive"
      layout-id="bubble"
      class="absolute inset-0 -z-10 bg-card rounded-md"
      :transition="{
        type: 'spring',
        bounce: 0.2,
        duration: 0.6,
      }"
    />
  </Primitive>
</template>

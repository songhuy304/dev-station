<script setup lang="ts">
import { computed, provide, type HTMLAttributes } from 'vue'
import { TabFilterKey } from '.'
import { cn } from '@/shared/lib'

const props = defineProps<{
  modelValue: string
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const current = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const setActive = (value: string) => {
  current.value = value
}

provide(TabFilterKey, {
  current,
  setActive,
})
</script>

<template>
  <div
    :class="
      cn(
        'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

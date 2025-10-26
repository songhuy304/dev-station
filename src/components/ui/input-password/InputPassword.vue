<script setup lang="ts">
import { Input, Button } from '@/components'
import { cn } from '@/shared/lib/utils'
import { useVModel } from '@vueuse/core'
import { Eye, EyeOff } from 'lucide-vue-next'
import { ref, type HTMLAttributes } from 'vue'

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)

const showPassword = ref(false)

const togglePassword = () => (showPassword.value = !showPassword.value)
</script>

<template>
  <div class="relative w-full max-w-full items-center">
    <Input
      v-model="modelValue"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="props.placeholder"
      :class="cn('pr-10', props.class)"
    />
    <Button
      @click="togglePassword"
      type="button"
      variant="link"
      class="absolute end-0 inset-y-0 flex items-center justify-center px-3 text-muted-foreground"
    >
      <component :is="showPassword ? EyeOff : Eye" class="size-5" />
    </Button>
  </div>
</template>

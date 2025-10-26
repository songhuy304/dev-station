<script setup lang="ts">
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import InputPassword from '../input-password/InputPassword.vue'

interface Props {
  name: string
  label?: string
  description?: string
  placeholder?: string
  disabled?: boolean
  type?: 'text' | 'password' | 'email'
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})
</script>

<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel v-if="label">{{ label }}</FormLabel>
      <FormControl>
        <component
          :is="type === 'password' ? InputPassword : Input"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          v-bind="componentField"
        />
      </FormControl>
      <FormDescription v-if="description">
        {{ description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

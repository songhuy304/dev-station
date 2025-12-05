<script setup lang="ts">
import type { Component } from 'vue'
import { Field as VeeField } from 'vee-validate'

import {
  Field as UiField,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import InputPassword from '../input-password/InputPassword.vue'

interface Props {
  name: string
  label?: string
  description?: string
  placeholder?: string
  disabled?: boolean
  type?: 'text' | 'password' | 'email'
  required?: boolean
  labelIcon?: Component
  class?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})
</script>

<template>
  <VeeField v-slot="{ field, errors }" :name="name" :validate-on-input="true">
    <UiField :data-invalid="!!errors?.length" :class="class">
      <FieldLabel v-if="label" :for="name" class="flex items-center gap-1">
        <span v-if="labelIcon" aria-hidden="true">
          <component :is="labelIcon" class="size-4" />
        </span>
        <span>{{ label }}</span>
        <span v-if="required" class="text-destructive" aria-hidden="true"> * </span>
      </FieldLabel>

      <FieldContent>
        <component
          :is="type === 'password' ? InputPassword : Input"
          :id="name"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :aria-invalid="!!errors?.length"
          v-bind="field"
          v-model="field.value"
        />

        <FieldDescription v-if="description">
          {{ description }}
        </FieldDescription>
        <FieldError v-if="errors.length" :errors="errors" />
      </FieldContent>
    </UiField>
  </VeeField>
</template>

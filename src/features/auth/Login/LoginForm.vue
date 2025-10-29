<script setup lang="ts">
import { Button, InputField } from '@/components'
import { useAuthSchema } from '@/schemas'
import { useAuthModal } from '@/shared/hooks'
import type { LoginFormData } from '@/shared/types'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const emit = defineEmits<{
  submit: [values: LoginFormData]
}>()

const { loginSchema } = useAuthSchema()
const { openModal } = useAuthModal()
const { t } = useI18n()

const { handleSubmit, meta } = useForm({
  validationSchema: loginSchema,
})

const onSubmit = handleSubmit((values) => {
  emit('submit', values)
})
</script>

<template>
  <form class="space-y-6" @submit="onSubmit">
    <InputField
      name="email"
      type="email"
      :label="t('fields.email.label')"
      :placeholder="t('fields.email.placeholder')"
    />
    <InputField
      name="password"
      type="password"
      :label="t('fields.password.label')"
      :placeholder="t('fields.password.placeholder')"
    />

    <p class="text-right text-sm text-muted-foreground">
      {{ $t('dontHaveAnAccount') }}
      <span
        class="text-blue-500 font-medium hover:underline cursor-pointer"
        @click.stop.prevent="openModal('register')"
      >
        {{ $t('signUp') }}
      </span>
    </p>

    <Button :disable="!meta.valid" type="submit" class="w-full">{{ $t('signIn') }}</Button>
  </form>
</template>

<script setup lang="ts">
import { Button, InputField } from '@/components'
import { useAuthSchema, type LoginFormData } from '@/schemas'
import { useAuthModal } from '@/shared/hooks'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const { loginSchema } = useAuthSchema()
const { openModal } = useAuthModal()
const { t } = useI18n()

const emit = defineEmits<{
  submit: [values: LoginFormData]
}>()

const props = defineProps<{
  isLoading?: boolean
}>()

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
      name="username"
      :label="t('fields.username.label')"
      :placeholder="t('fields.username.placeholder')"
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

    <Button
      :loading="props.isLoading"
      :disabled="!meta.valid || props.isLoading"
      type="submit"
      class="w-full"
      >{{ $t('signIn') }}</Button
    >
  </form>
</template>

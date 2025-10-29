<script setup lang="ts">
import { Button, InputField } from '@/components'
import { useAuthSchema } from '@/schemas'
import { useAuthModal } from '@/shared/hooks'
import { Icon } from '@iconify/vue'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'

interface RegisterFormData {
  name: string
  email: string
  password: string
}

const emit = defineEmits<{
  submit: [values: RegisterFormData]
}>()

const { registerSchema } = useAuthSchema()
const { t } = useI18n()

const { handleSubmit, meta } = useForm({
  validationSchema: registerSchema,
})
const { openModal } = useAuthModal()

const onSubmit = handleSubmit((values) => {
  emit('submit', values as RegisterFormData)
})
</script>

<template>
  <form class="space-y-6" @submit="onSubmit">
    <InputField
      name="name"
      type="text"
      :label="t('fields.name.label')"
      :placeholder="t('fields.name.placeholder')"
    />
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

    <div class="space-y-3">
      <Button :disabled="!meta.valid" type="submit" class="w-full">{{ t('signUp') }}</Button>

      <div class="flex items-center gap-2">
        <div class="h-px flex-1 bg-muted" />
        <span class="text-xs text-muted-foreground">{{ t('or') }}</span>
        <div class="h-px flex-1 bg-muted" />
      </div>

      <div class="flex items-center justify-center gap-3">
        <Button variant="outline" size="icon">
          <Icon icon="logos:google-icon" class="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Icon icon="ri:facebook-fill" class="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Icon icon="mdi:github" class="w-4 h-4" />
        </Button>
      </div>

      <p class="text-center text-sm text-muted-foreground">
        {{ t('alreadyHaveAnAccount') }}
        <span
          class="text-blue-500 font-medium hover:underline cursor-pointer"
          @click="openModal('login')"
        >
          {{ t('signIn') }}
        </span>
      </p>
    </div>
  </form>
</template>

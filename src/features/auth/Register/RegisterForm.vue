<script setup lang="ts">
import { Button, InputField } from '@/components'
import { useAuthSchema, type RegisterFormData } from '@/schemas'
import { useAuthModal } from '@/shared/hooks'
import { Icon } from '@iconify/vue'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const emit = defineEmits<{
  submit: [values: RegisterFormData]
}>()

const props = defineProps<{
  isLoading?: boolean
}>()

const { registerSchema } = useAuthSchema()
const { openModal } = useAuthModal()
const { t } = useI18n()

const { handleSubmit, meta } = useForm({
  validationSchema: registerSchema,
})

const onSubmit = handleSubmit((values) => {
  emit('submit', values)
})
</script>

<template>
  <form class="space-y-6" @submit="onSubmit">
    <InputField
      name="fullName"
      type="text"
      :label="t('fields.fullName.label')"
      :placeholder="t('fields.fullName.placeholder')"
    />

    <InputField
      name="username"
      :label="t('fields.username.label')"
      :placeholder="t('fields.username.placeholder')"
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
      <Button :disabled="!meta.valid" :loading="props.isLoading" type="submit" class="w-full">{{
        t('signUp')
      }}</Button>

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

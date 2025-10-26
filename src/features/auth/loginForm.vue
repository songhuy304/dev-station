<script setup lang="ts">
import { Button, InputField } from '@/components'
import { AUTH_PATH } from '@/router'
import { loginSchema } from '@/schemas/login'
import type { LoginFormData } from '@/shared/types'
import { useForm } from 'vee-validate'
import { RouterLink } from 'vue-router'

const emit = defineEmits<{
  submit: [values: LoginFormData]
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
    <InputField name="email" type="email" label="Email" placeholder="Enter your email address" />
    <InputField
      name="password"
      type="password"
      label="Password"
      placeholder="Enter your password"
    />

    <p class="text-right text-sm text-muted-foreground">
      Don't have an account?
      <RouterLink class="text-blue-500 font-medium hover:underline" :to="AUTH_PATH.REGISTER">
        Sign up
      </RouterLink>
    </p>

    <Button :disabled="!meta.valid" type="submit" class="w-full">Sign In</Button>
  </form>
</template>

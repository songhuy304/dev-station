<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components'
import { useAuthModal, useLogin } from '@/shared/hooks'
import type { IAuthTokenResponse } from '@/shared/types'
import LoginForm from './LoginForm.vue'
import { setToken } from '@/shared/utils'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'
import type { LoginFormData } from '@/schemas'
import { useUserStore } from '@/shared/stores'

const props = defineProps<{
  open: boolean
  onClose: () => void
}>()

const { t } = useI18n()
const { closeModal } = useAuthModal()
const { mutate: login, isPending } = useLogin()
const authStore = useUserStore()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const onChangeOpen = (value: boolean) => {
  emit('update:open', value)
  if (!value) {
    props.onClose()
  }
}

const onSubmit = async (values: LoginFormData) => {
  login(values, {
    onSuccess: (data: IAuthTokenResponse) => {
      setToken('at', data.accessToken)
      setToken('rft', data.refreshToken)
      authStore.setLogin()
      closeModal()
    },
    onError: (error) => {
      toast.warning(t(error.errorCode))
    },
  })
}
</script>

<template>
  <Dialog :open="props.open" @update:open="onChangeOpen">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ $t('welcomeBack') }} 👋</DialogTitle>
        <p class="text-sm text-muted-foreground">{{ $t('signInToYourAccount') }}</p>
      </DialogHeader>

      <div class="mt-8">
        <LoginForm :is-loading="isPending" @submit="onSubmit" />
      </div>
    </DialogContent>
  </Dialog>
</template>

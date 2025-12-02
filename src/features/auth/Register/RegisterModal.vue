<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components'
import RegisterForm from './RegisterForm.vue'
import type { RegisterFormData } from '@/schemas'
import { useAuthModal, useRegister } from '@/shared/hooks'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  open: boolean
  onClose: () => void
}>()

const { openModal } = useAuthModal()
const { mutate: register, isPending } = useRegister()
const { t } = useI18n()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const onChangeOpen = (value: boolean) => {
  emit('update:open', value)
  if (!value) {
    props.onClose()
  }
}

const onSubmit = async (values: RegisterFormData) => {
  register(values, {
    onSuccess: () => {
      openModal('login')
      toast.success(t('message.register.success'))
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
        <DialogTitle>Tạo tài khoản ✨</DialogTitle>
        <p class="text-sm text-muted-foreground">Đăng ký để tiếp tục</p>
      </DialogHeader>

      <div class="mt-8">
        <RegisterForm @submit="onSubmit" :isLoading="isPending" />
      </div>
    </DialogContent>
  </Dialog>
</template>

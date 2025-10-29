<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components'
import RegisterForm from './RegisterForm.vue'

interface RegisterFormData {
  name: string
  email: string
  password: string
}

const props = defineProps<{
  open: boolean
  onClose: () => void
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const onChangeOpen = (value: boolean) => {
  emit('update:open', value)
  if (!value) {
    props.onClose()
  }
}
const onSubmit = (values: RegisterFormData) => {
  console.log(values)
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
        <RegisterForm @submit="onSubmit" />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components'
import type { LoginFormData } from '@/shared/types'
import LoginForm from './LoginForm.vue'

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
const onSubmit = (values: LoginFormData) => {
  console.log(values)
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
        <LoginForm @submit="onSubmit" />
      </div>
    </DialogContent>
  </Dialog>
</template>

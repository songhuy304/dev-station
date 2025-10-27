<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components'
import type { LoginFormData } from '@/shared/types'
import { LoginForm } from '.'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const onSubmit = (values: LoginFormData) => {
  console.log(values)
}
</script>

<template>
  <Dialog :open="props.open" @update:open="emit('update:open', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Welcome Back 👋</DialogTitle>
        <p class="text-sm text-muted-foreground">Sign in to your account to continue.</p>
      </DialogHeader>

      <div class="mt-8">
        <LoginForm @submit="onSubmit" />
      </div>
    </DialogContent>
  </Dialog>
</template>

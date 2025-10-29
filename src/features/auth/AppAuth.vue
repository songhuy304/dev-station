<script setup lang="ts">
import { useAuthModal } from '@/shared/hooks'
import { LoginModal } from './Login'
import { RegisterModal } from './Register'

const { showLogin, showRegister, closeModal } = useAuthModal()
console.log('🚀 ~ showLogin:', showLogin)
</script>

<template>
  <LoginModal v-model:open="showLogin" :onClose="closeModal" />
  <RegisterModal v-model:open="showRegister" :onClose="closeModal" />
</template>

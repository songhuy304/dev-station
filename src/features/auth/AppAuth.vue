<script setup lang="ts">
import { useAuth } from '@/shared/hooks'
import LoginModal from './LoginModal.vue'

const { showLogin } = useAuth()
</script>

<template>
  <LoginModal v-if="showLogin" v-model:open="showLogin" />
</template>

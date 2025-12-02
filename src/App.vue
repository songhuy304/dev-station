<script setup lang="ts">
import { MainLayout } from './components/layout'
import { AppAuth } from './features'
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <MainLayout />
  <Toaster rich-colors />
  <AppAuth />
</template>

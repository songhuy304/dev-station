<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSidebar from './app-sidebar.vue'
</script>

<template>
  <div class="w-full min-h-svh flex" style="--sidebar-width: 18rem">
    <AppSidebar />
    <main class="relative flex-1 w-full flex-col bg-background py-10 px-20">
      <RouterView />
    </main>
  </div>
</template>

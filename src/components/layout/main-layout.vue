<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSidebar from './app-sidebar.vue'
import { Motion } from 'motion-v'
</script>

<template>
  <div class="w-full min-h-svh flex" style="--sidebar-width: 18rem">
    <AppSidebar />
    <main class="relative flex-1 w-full flex-col bg-background py-10 px-20">
      <RouterView v-slot="{ Component, route }">
        <Motion
          :key="route.path"
          :initial="{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }"
          :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
          :exit="{ opacity: 0, scale: 1.02, filter: 'blur(6px)' }"
          :transition="{ duration: 0.45, ease: 'easeOut' }"
        >
          <component :is="Component" />
        </Motion>
      </RouterView>
    </main>
  </div>
</template>

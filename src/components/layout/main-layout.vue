<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '@/components'
import { Motion } from 'motion-v'
import { RouterView } from 'vue-router'
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <AppHeader />
      <RouterView v-slot="{ Component, route }" class="px-10">
        <Motion
          :key="route.path"
          :initial="{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }"
          :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
          :exit="{ opacity: 0, scale: 1.02, filter: 'blur(6px)' }"
          :transition="{ duration: 0.45, ease: 'easeOut' }"
          class="px-10 py-1"
        >
          <component :is="Component" />
        </Motion>
      </RouterView>
    </SidebarInset>
  </SidebarProvider>
</template>

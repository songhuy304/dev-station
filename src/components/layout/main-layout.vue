<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Motion } from 'motion-v'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import AppSidebar from './AppSidebar.vue'
import Separator from '../ui/separator/Separator.vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#"> Building Your Application </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

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

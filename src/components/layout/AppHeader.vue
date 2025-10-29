<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/language-switcher/LanguageSwitcher.vue'
import DarkModeToggle from '@/components/darkmode/DarkModeToggle.vue'
import NavUser from '@/components/layout/NavUser.vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarTrigger,
} from '@/components/ui'

const router = useRouter()
const { t } = useI18n()

const pageTitle = computed(() => router.currentRoute.value.meta.title)
</script>
<template>
  <header class="flex h-16 shrink-0 items-center gap-2">
    <div class="flex items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 !h-4 bg-border" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem class="hidden md:block">
            <BreadcrumbLink href="#"> Dev Station </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{{ t(`app.${pageTitle}`) }}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <div class="ml-auto flex items-center gap-2 px-4">
      <LanguageSwitcher />
      <DarkModeToggle />
      <NavUser />
    </div>
  </header>
</template>

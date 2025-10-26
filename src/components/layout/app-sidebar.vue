<script setup lang="ts">
import { routes } from '@/router'
import { Menu } from 'lucide-vue-next'
import { ref } from 'vue'
import { Button, Sheet, SheetContent, SheetTrigger } from '../ui'
import DarkModeToggle from '../darkmode/DarkModeToggle.vue'
import { useI18n } from 'vue-i18n'
import { LanguageSwitcher } from '../language-switcher'

const mobileOpen = ref(true)
const { t } = useI18n()
</script>

<template>
  <div class="hidden md:flex h-screen w-(--sidebar-width) bg-sidebar border-r flex-col">
    <div class="py-8">
      <h2 class="text-3xl font-bold text-center text-primary">{{ t('app.title') }}</h2>
    </div>

    <nav class="px-8">
      <ul class="space-y-4">
        <li v-for="value in routes" :key="value.path">
          <RouterLink
            :to="value.path"
            class="py-3 px-6 rounded-lg flex gap-4 items-center hover:bg-primary transition-colors duration-300"
            :class="{ 'bg-primary': $route.path === value.path }"
          >
            <component :is="value.icon" class="w-6 h-6 shrink-0" />
            <span>{{ t(`app.${value.name}`) }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="mt-auto p-5 flex justify-center items-center gap-4">
      <LanguageSwitcher />
      <DarkModeToggle />
    </div>
  </div>

  <div class="md:hidden">
    <Sheet v-model="mobileOpen">
      <SheetTrigger asChild>
        <Button class="fixed bottom-5 left-5 z-50 size-12"
          ><Menu class="text-white size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="w-64 p-4">
        <div class="py-4">
          <h2 class="text-2xl font-bold text-primary text-center">{{ t('app.title') }}</h2>
        </div>
        <nav class="flex-1">
          <ul class="space-y-4">
            <li v-for="value in routes" :key="value.path">
              <RouterLink
                :to="value.path"
                class="py-4 px-6 rounded-xl flex gap-4 items-center hover:bg-primary transition-colors duration-300"
                :class="{ 'bg-primary': $route.path === value.path }"
                @click="mobileOpen = false"
              >
                <component :is="value.icon" class="w-6 h-6 shrink-0" />
                <span>{{ t(`app.${value.name}`) }}</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="mt-auto pt-4 space-y-4">
          <DarkModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>

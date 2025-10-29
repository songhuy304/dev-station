<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/shared/hooks'
import { Icon } from '@iconify/vue'

const { currentLanguage, currentFlag, currentLanguageName, changeLanguage } = useLanguage()
</script>

<template>
  <Button variant="secondary" size="sm" class="gap-2 cursor-pointer" @click="changeLanguage">
    <img :src="currentFlag" :alt="currentLanguage" class="w-4 h-4 rounded-sm" />
    <span class="hidden sm:inline">{{ currentLanguageName }}</span>
    <Icon icon="lucide:refresh-cw" class="h-4 w-4" />
  </Button>
</template>

<script setup lang="ts">
import { Button, Card, CardContent } from '@/components/ui'

const props = defineProps<{
  title: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
}>()
</script>

<template>
  <Card class="py-12 bg-card-pageHeader shadow-lg backdrop-blur-2xl">
    <CardContent class="px-18 flex justify-between items-center">
      <div class="space-y-3 max-w-[425px]">
        <h1 class="text-4xl font-bold">{{ props.title }}</h1>
        <p v-if="props.description" class="text-sm">{{ props.description }}</p>
        <Button v-if="props.buttonText" variant="secondary" size="lg" @click="props.onButtonClick">
          {{ props.buttonText }}
        </Button>
      </div>

      <img src="/images/bg-page-header.png" alt="page" class="w-64" />
    </CardContent>
  </Card>
</template>

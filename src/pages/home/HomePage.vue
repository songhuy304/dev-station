<script setup lang="ts">
import { Card, CardContent } from '@/components'
import { BlurReveal } from '@/components/animation'
</script>

<template>
  <Card>
    <CardContent>
      <BlurReveal :delay="0.2" :duration="0.75">
        <h2 class="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">
          Hey there 👋
        </h2>
        <span class="text-pretty text-xl tracking-tighter xl:text-4xl/none sm:text-3xl">
          How is it going?
        </span>
      </BlurReveal>
    </CardContent>
  </Card>
</template>

<template>
  <div class="relative pt-4">
    <div class="space-y-2">
      <div class="text-xl font-semibold uppercase border-b border-black dark:border-white w-full">
        <h3>{{ title }}</h3>
      </div>

      <div v-if="$slots.default" :class="class">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  class?: string
}>()
</script>

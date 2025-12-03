<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div class="max-w-[210mm] mx-auto px-4 w-full">
    <div
      class="bg-background border rounded-xl border-[#E5E7EB] dark:border-[#4b4b4b] shadow-sm w-full h-[297mm] overflow-auto"
      :style="{
        'aspect-ratio': '1 / 1.414',
        'max-height': '297mm',
      }"
    >
      <div v-if="$slots.default" class="p-6 h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

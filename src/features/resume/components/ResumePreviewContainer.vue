<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div class="bg-background h-[297mm] overflow-auto w-[764px]">
    <div v-if="$slots.default" class="p-6 h-full" id="#resume-preview">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IResumePreview } from '@/shared/types'
import { computed } from 'vue'

const props = defineProps<{
  resumeData: Partial<IResumePreview>
}>()

const infoList = computed(() => {
  return [
    props.resumeData.email,
    props.resumeData.phoneNumber,
    props.resumeData.location,
    props.resumeData.github,
    props.resumeData.linkedin,
  ].filter(Boolean)
})
</script>

<template>
  <div class="align-middle">
    <div class="max-w-[210mm] mx-auto px-4 w-full">
      <div
        class="bg-background border rounded-xl border-[#E5E7EB] dark:border-[#4b4b4b] shadow-sm w-full h-[297mm] overflow-auto"
        :style="{
          'aspect-ratio': '1 / 1.414',
          'max-height': '297mm',
        }"
      >
        <div class="p-6 h-full">
          <div class="pb-2 py-4 relative">
            <div class="font-bold text-center text-3xl leading-normal">
              <span>{{ resumeData.name }}</span>
            </div>

            <div
              class="flex items-center justify-center text-sm font-normal gap-3 text-muted-foreground"
            >
              {{ infoList.join(' | ') }}
            </div>

            <div
              class="mt-2 text-sm prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert"
              v-html="resumeData.summary"
            ></div>
          </div>
        </div>
      </div>

      <div class="mt-4 text-sm text-gray-500 text-center">Preview in A4 format</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IResumePreview } from '@/shared/types'
import { isEmpty, isHtmlEmpty } from '@/shared/utils'
import { computed, ref } from 'vue'
import SectionResume from './SectionResume.vue'

const props = defineProps<{
  resumeData: Partial<IResumePreview>
}>()

const rootRef = ref<HTMLElement | null>(null)

defineExpose({
  rootRef,
})

const infoList = computed(() => {
  return [
    props.resumeData.email,
    props.resumeData.phoneNumber,
    props.resumeData.location,
    props.resumeData.github,
    props.resumeData.linkedin,
  ].filter(Boolean)
})

const formatDate = (startDate: string | undefined, graduationDate: string | undefined) => {
  if (!graduationDate) return startDate
  return `${startDate} - ${graduationDate}`
}
</script>

<template>
  <div class="align-middle">
    <div class="bg-background h-[297mm] w-[210mm] overflow-hidden mx-auto shadow-2xl" ref="rootRef">
      <div class="p-6 h-full" id="resume-preview">
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

        <SectionResume title="Education" v-if="!isEmpty(resumeData.education)" class="space-y-2">
          <div v-for="(item, index) in resumeData.education" :key="index">
            <div class="text-sm flex justify-between items-center font-medium">
              <p>{{ item.educationName }}</p>
              <p>{{ formatDate(item.startDate, item.graduationDate) }}</p>
            </div>
            <div class="text-sm font-normal flex justify-between items-center">
              <p>{{ item.degree }}</p>
              <p>{{ item.gpa }}</p>
            </div>
          </div>
        </SectionResume>

        <SectionResume title="Experience" v-if="!isEmpty(resumeData.experiences)" class="space-y-2">
          <div v-for="(item, index) in resumeData.experiences" :key="index">
            <div class="text-sm flex justify-between items-center font-medium">
              <p>{{ item.jobRole }}</p>
              <p>{{ formatDate(item.startDate, item.endDate) }}</p>
            </div>

            <p class="text-sm">{{ item.nameCompany }}</p>

            <div class="pl-5 text-sm">
              <div v-html="item.jobDescription"></div>
            </div>
          </div>
        </SectionResume>

        <SectionResume title="Projects" v-if="!isEmpty(resumeData.projects)" class="space-y-2">
          <div v-for="(item, index) in resumeData.projects" :key="index">
            <div class="text-sm flex justify-between items-center font-medium">
              <p class="font-semibold">{{ item.nameProject }}</p>
              <p>{{ formatDate(item.startDate, item.endDate) }}</p>
            </div>

            <div class="pl-5 text-sm">
              <div v-html="item.projectDescription"></div>
            </div>
          </div>
        </SectionResume>

        <SectionResume title="Skills" v-if="!isHtmlEmpty(resumeData.skill)">
          <div class="text-sm" v-html="resumeData.skill"></div>
        </SectionResume>
      </div>
    </div>
  </div>
</template>

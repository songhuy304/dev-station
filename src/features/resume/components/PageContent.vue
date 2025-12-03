<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'
import { ResumeBasicForm } from './'
import ResumeEducationForm from './ResumeEducationForm.vue'
import ResumeSkillForm from './ResumeSkillForm.vue'
import ResumeProjectForm from './ResumeProjectForm.vue'
import ResumeExperienceForm from './ResumeExperienceForm.vue'
</script>

<template>
  <form class="relative flex-1">
    <Accordion type="multiple" collapsible :unmount-on-hide="false">
      <AccordionItem value="item-1" class="bg-transparent shadow-none border-b">
        <AccordionTrigger class="text-base font-semibold">Personal Infomation</AccordionTrigger>
        <AccordionContent class="pt-5 border-t">
          <ResumeBasicForm />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" class="bg-transparent shadow-none border-b">
        <AccordionTrigger class="text-base font-semibold">Experience</AccordionTrigger>
        <AccordionContent class="pt-5 border-t">
          <ResumeExperienceForm />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" class="bg-transparent shadow-none border-b">
        <AccordionTrigger class="text-base font-semibold">Projects</AccordionTrigger>
        <AccordionContent class="pt-5 border-t">
          <ResumeProjectForm />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" class="bg-transparent shadow-none border-b">
        <AccordionTrigger class="text-base font-semibold">Skills</AccordionTrigger>
        <AccordionContent class="pt-5 border-t">
          <ResumeSkillForm />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" class="bg-transparent shadow-none border-b">
        <AccordionTrigger class="text-base font-semibold">Education</AccordionTrigger>
        <AccordionContent class="pt-5 border-t">
          <ResumeEducationForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </form>
</template>

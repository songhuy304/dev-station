<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'
import { ResumeBasicForm } from './'
import { useResumeSchema } from '@/schemas'
import { useForm } from 'vee-validate'

const { resumeBasicSchema } = useResumeSchema()
const { handleSubmit, values } = useForm({
  validationSchema: resumeBasicSchema,
})
</script>

<template>
  <form class="relative w-[400px]">
    <Accordion type="multiple" collapsible>
      <AccordionItem value="item-1" class="bg-transparent shadow-none">
        <AccordionTrigger class="text-base font-semibold">Personal Infomation</AccordionTrigger>
        <AccordionContent class="pt-5 border-t">
          <ResumeBasicForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </form>
</template>

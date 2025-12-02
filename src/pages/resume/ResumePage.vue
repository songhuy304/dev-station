<script setup lang="ts">
import { Button, Heading, Text } from '@/components'
import { PageContent, ResumePreview } from '@/features/resume'
import { useResumeSchema } from '@/schemas'
import { Eye, FileUp } from 'lucide-vue-next'
import { useForm } from 'vee-validate'

const { resumeBasicSchema } = useResumeSchema()
const { values } = useForm({
  validationSchema: resumeBasicSchema,
})
</script>

<template>
  <div class="space-y-3">
    <div class="flex justify-between">
      <div class="max-w-xl">
        <Heading level="h3">Create Your Professional Resume</Heading>
        <Text color="muted" variant="sm">
          Build a standout resume in minutes. Fill in your details, customize the layout, and
          download a polished CV that highlights your strengths.
        </Text>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button>
          <Eye className="mr-2 h-4 w-4" />
          Save changes
        </Button>

        <Button variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>

        <Button variant="outline">
          <FileUp />
          Parse from CV
        </Button>

        <!-- <Button variant="outline">
          <LucideLinkedin />
          Parse from LinkedIn
        </Button> -->
      </div>
    </div>

    <div class="flex gap-8">
      <PageContent />
      <ResumePreview :resumeData="values" />
    </div>
  </div>
</template>

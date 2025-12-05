<script setup lang="ts">
import { Button, Heading, Text } from '@/components'
import { PageContent, ResumePreview } from '@/features/resume'
import { useResumeSchema } from '@/schemas'
import { INIT_VALUES } from '@/shared/constants/init-value'
import { Eye, FileUp } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { useVueToPrint } from 'vue-to-print'

const { resumeBasicSchema } = useResumeSchema()
const { values } = useForm({
  validationSchema: resumeBasicSchema,
  initialValues: INIT_VALUES,
})

const previewRef = ref()

const { handlePrint } = useVueToPrint({
  content: previewRef,
  documentTitle: 'adasdasd',
})

const onPreview = () => {
  handlePrint()
}
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

        <Button variant="outline" @click="onPreview">
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>

        <Button variant="outline">
          <FileUp />
          Parse from CV
        </Button>
      </div>
    </div>

    <div class="flex gap-8">
      <PageContent />
      <ResumePreview :resumeData="values" ref="previewRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  Field as UiField,
} from '@/components/ui/field'
import StarterKit from '@tiptap/starter-kit'
import { useEditor } from '@tiptap/vue-3'
import { Field as VeeField } from 'vee-validate'
import type { Component } from 'vue'
import { ref } from 'vue'
import { TiptapContent, TiptapProvider, TiptapStatusBar, TiptapToolbar } from '../tiptap'

interface Props {
  name: string
  label?: string
  description?: string
  required?: boolean
  labelIcon?: Component
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {})

const updateValue = ref<(value: string) => void>()

const editor = useEditor({
  extensions: [StarterKit],
  content: '',
  onUpdate({ editor }) {
    const html = editor.getHTML()
    if (updateValue.value) {
      updateValue.value(html)
    }
  },
})
</script>

<template>
  <VeeField v-slot="{ errors, value, handleChange }" :name="name" :validate-on-input="true">
    <UiField :data-invalid="!!errors?.length">
      <FieldLabel v-if="label" :for="name" class="flex items-center gap-1">
        <span v-if="labelIcon" aria-hidden="true">
          <component :is="labelIcon" class="size-4" />
        </span>
        <span>{{ label }}</span>
        <span v-if="required" class="text-destructive" aria-hidden="true"> * </span>
      </FieldLabel>

      <FieldContent>
        <TiptapProvider
          :editor="editor"
          @vue:mounted="
            () => {
              updateValue = handleChange
              if (editor && value) {
                editor.commands.setContent(value, { emitUpdate: false })
              }
            }
          "
        >
          <TiptapToolbar />
          <TiptapContent />
          <TiptapStatusBar show-word-count />
        </TiptapProvider>

        <FieldDescription v-if="description">{{ description }}</FieldDescription>
        <FieldError v-if="errors.length" :errors="errors" />
      </FieldContent>
    </UiField>
  </VeeField>
</template>

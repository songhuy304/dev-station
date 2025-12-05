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
  class?: string
}
withDefaults(defineProps<Props>(), {})

// Lưu hàm handleChange để dùng trong onUpdate
const handleChangeRef = ref<((value: string) => void) | null>(null)

const editor = useEditor({
  extensions: [StarterKit],
  content: '',
  onUpdate({ editor }) {
    const html = editor.getHTML()
    if (handleChangeRef.value) {
      handleChangeRef.value(html)
    }
  },
})

const setEditorContent = (content: string) => {
  if (editor.value && content) {
    if (editor.value.getHTML() !== content) {
      editor.value.commands.setContent(content, { emitUpdate: false })
    }
  }
}

const handleEditorMounted = (value: string, handleChange: (value: string) => void) => {
  handleChangeRef.value = handleChange
  if (value) {
    setTimeout(() => {
      setEditorContent(value)
    }, 0)
  }
}
</script>

<template>
  <VeeField v-slot="{ errors, value, handleChange }" :name="name" :validate-on-input="true">
    <UiField :data-invalid="!!errors?.length" :class="class">
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
          @vue:mounted="() => handleEditorMounted(value, handleChange)"
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

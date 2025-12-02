<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/utils'
import { computed } from 'vue'
import { useTiptapContext } from '.'
import TiptapProvider from './TiptapProvider.vue'

const props = defineProps<{
  editor: Editor | undefined
  class?: HTMLAttributes['class']
  fullScreen?: boolean
}>()

let editorContext
try {
  editorContext = useTiptapContext()
} catch (e) {
  editorContext = null
}

const useExternalProvider = computed(() => !!editorContext)
</script>

<template>
  <div
    :class="cn('tiptap-editor', props.fullScreen && 'fixed inset-0 z-50', props.class)"
    data-slot="tiptap-editor"
  >
    <TiptapProvider v-if="!useExternalProvider" :editor="props.editor">
      <slot />
    </TiptapProvider>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

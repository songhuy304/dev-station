<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/shared/lib/utils'
import { textVariants, type TextVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: TextVariants['variant']
  weight?: TextVariants['weight']
  color?: TextVariants['color']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'p',
  variant: 'base',
})
</script>

<template>
  <Primitive
    :as="props.as"
    :class="
      cn(
        textVariants({
          variant: props.variant,
          weight: props.weight,
          color: props.color,
        }),
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>

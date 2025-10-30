<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/shared/lib/utils'
import { headingVariants, type HeadingVariants } from '.' // import headingVariants và type

interface Props extends PrimitiveProps {
  weight?: HeadingVariants['weight']
  level: HeadingVariants['level']
  color?: HeadingVariants['color']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  level: 'h3',
})

const as = props.level!
</script>

<template>
  <Primitive
    :as="as"
    :class="
      cn(
        headingVariants({
          weight: props.weight,
          level: props.level,
          color: props.color,
        }),
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>

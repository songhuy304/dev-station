import { cva, type VariantProps } from 'class-variance-authority'
import { colorVariants } from '../common-classes'

export const textVariants = cva('', {
  variants: {
    variant: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      muted: 'text-sm text-muted-foreground',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: colorVariants,
  },
  defaultVariants: {
    variant: 'base',
    weight: 'normal',
    color: 'default',
  },
})

export type TextVariants = VariantProps<typeof textVariants>
export { default as Text } from './Text.vue'

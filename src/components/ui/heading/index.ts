import { cva, type VariantProps } from 'class-variance-authority'
import { colorVariants } from '../common-classes'

export const headingVariants = cva('tracking-tight', {
  variants: {
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-semibold',
      extrabold: 'font-extrabold',
    },
    level: {
      h1: 'text-4xl font-extrabold',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-medium',
      h5: 'text-lg font-medium',
      h6: 'text-base font-normal',
    },
    color: colorVariants,
  },
  defaultVariants: {
    weight: 'medium',
    level: 'h3',
    color: 'default',
  },
})

export type HeadingVariants = VariantProps<typeof headingVariants>

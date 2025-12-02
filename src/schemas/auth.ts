import { toTypedSchema } from '@vee-validate/zod'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'

const minLen = 6
const maxLen = 30

export const useAuthSchema = () => {
  const { t } = useI18n()

  const loginZodSchema = z.object({
    username: z.string().min(1, t('validationMessage.required')),
    password: z
      .string()
      .min(minLen, t('validationMessage.mustBeLeast', { num: minLen }))
      .max(maxLen, t('validationMessage.mustNotExceed', { num: maxLen })),
  })

  const loginSchema = toTypedSchema(loginZodSchema)

  const registerZodSchema = z.object({
    fullName: z
      .string()
      .min(2, { message: 'Full name must be at least 2 characters' })
      .max(100, { message: 'Full name must not exceed 100 characters' }),
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(minLen, t('validationMessage.mustBeLeast', { num: minLen }))
      .max(maxLen, t('validationMessage.mustNotExceed', { num: maxLen })),
    username: z.string().min(2, { message: 'Username must be at least 2 characters' }),
  })

  const registerSchema = toTypedSchema(registerZodSchema)

  return {
    loginZodSchema,
    loginSchema,
    registerZodSchema,
    registerSchema,
  }
}

export type LoginFormData = z.infer<ReturnType<typeof useAuthSchema>['loginZodSchema']>

export type RegisterFormData = z.infer<ReturnType<typeof useAuthSchema>['registerZodSchema']>

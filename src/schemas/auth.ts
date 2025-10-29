import { toTypedSchema } from '@vee-validate/zod'
import { useI18n } from 'vue-i18n'
import * as z from 'zod'

const minLen = 6
const maxLen = 30

export const useAuthSchema = () => {
  const { t } = useI18n()

  const loginZodSchema = z.object({
    email: z
      .string()
      .min(1, t('validationMessage.required'))
      .email(t('validationMessage.invalidEmail')),
    password: z
      .string()
      .min(minLen, t('validationMessage.mustBeLeast', { num: minLen }))
      .max(maxLen, t('validationMessage.mustNotExceed', { num: maxLen })),
  })

  const loginSchema = toTypedSchema(loginZodSchema)

  // Register schema
  const registerZodSchema = z.object({
    name: z
      .string()
      .min(2, t('validationMessage.mustBeLeast', { num: 2 }))
      .max(50, t('validationMessage.mustNotExceed', { num: 50 })),
    email: z
      .string()
      .min(1, t('validationMessage.required'))
      .email(t('validationMessage.invalidEmail')),
    password: z
      .string()
      .min(minLen, t('validationMessage.mustBeLeast', { num: minLen }))
      .max(maxLen, t('validationMessage.mustNotExceed', { num: maxLen })),
  })

  const registerSchema = toTypedSchema(registerZodSchema)

  return { loginSchema, registerSchema }
}

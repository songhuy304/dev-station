import { toTypedSchema } from '@vee-validate/zod'
import { useI18n } from 'vue-i18n'
import * as z from 'zod'

export const useResumeSchema = () => {
  const { t } = useI18n()

  const educationZodSchema = z.object({
    educationName: z.string().min(1, t('validationMessage.required')),
    degree: z.string().min(1, t('validationMessage.required')),
    gpa: z.string().optional(),
    startDate: z.string().min(1, t('validationMessage.required')),
    graduationDate: z.string().optional(),
  })

  const resumeBasicZodSchema = z.object({
    name: z.string().min(1, t('validationMessage.required')),
    email: z
      .string()
      .min(1, t('validationMessage.required'))
      .email(t('validationMessage.invalidEmail')),
    phoneNumber: z.string().min(1, t('validationMessage.required')),
    location: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    summary: z.string().optional(),

    // education
    educationZodSchema,
  })

  const resumeBasicSchema = toTypedSchema(resumeBasicZodSchema)

  return { resumeBasicSchema }
}

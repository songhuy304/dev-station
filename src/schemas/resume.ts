import { toTypedSchema } from '@vee-validate/zod'
import { useI18n } from 'vue-i18n'
import * as z from 'zod'

export const useResumeSchema = () => {
  const { t } = useI18n()

  const educationZodSchema = z.object({
    educationName: z.string().min(1, t('validationMessage.required')),
    degree: z.string().optional(),
    gpa: z.string().optional(),
    startDate: z.string().optional(),
    graduationDate: z.string().optional(),
  })

  const projectZodSchema = z.object({
    nameProject: z.string().min(1, t('validationMessage.required')),
    projectDescription: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    role: z.string().optional(),
  })

  const experienceZodSchema = z.object({
    nameCompany: z.string().min(1, t('validationMessage.required')),
    jobDescription: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    jobRole: z.string().optional(),
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

    education: z.array(educationZodSchema).optional(),
    projects: z.array(projectZodSchema).optional(),
    experience: z.array(experienceZodSchema).optional(),

    skill: z.string().optional(),
  })

  const resumeBasicSchema = toTypedSchema(resumeBasicZodSchema)

  return { resumeBasicSchema }
}

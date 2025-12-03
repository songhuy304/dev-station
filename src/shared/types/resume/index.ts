export interface IResumePreview {
  name: string
  email: string
  phoneNumber: string
  location?: string
  linkedin?: string
  github?: string
  summary: string

  education?: IResumeEducationPreview[]
  projects?: IResumeProjectPreview[]
  experiences?: IResumeExperiencePreview[]
  skill: string
}

export interface IResumeEducationPreview {
  educationName: string
  degree: string
  gpa?: string
  startDate?: string
  graduationDate?: string
}

export interface IResumeProjectPreview {
  nameProject: string
  projectDescription?: string
  startDate?: string
  endDate?: string
  role?: string
}

export interface IResumeExperiencePreview {
  nameCompany: string
  jobDescription?: string
  startDate?: string
  endDate?: string
  jobRole?: string
}

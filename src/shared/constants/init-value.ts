import type { IResumePreview } from '../types'

export const INIT_VALUES: IResumePreview = {
  name: 'Name',
  email: 'name@example.com',
  phoneNumber: '0123456789',
  linkedin: '',
  github: '',
  summary:
    'Experienced software engineer with a passion for building scalable web applications and working with cross-functional teams.',

  education: [
    {
      educationName: 'University of Science',
      degree: 'Bachelor of Computer Science',
      gpa: '3.2 / 4.0',
      startDate: '2020',
      graduationDate: '2024',
    },
  ],

  projects: [
    {
      nameProject: 'Portfolio Website',
      projectDescription: 'A personal portfolio website to showcase projects and skills.',
      startDate: 'Nov 2024',
      endDate: 'Dec 2025',
      role: 'Frontend Developer',
    },
    {
      nameProject: 'E-commerce App',
      projectDescription: 'Developed a full-stack e-commerce application using Vue.js and Node.js.',
      startDate: 'Nov 2024',
      endDate: 'Dec 2025',
      role: 'Full Stack Developer',
    },
  ],

  experiences: [
    {
      nameCompany: 'TechCorp Vietnam',
      jobDescription: 'Developed and maintained web applications using modern JS frameworks.',
      startDate: '2020-07-01',
      endDate: '2023-08-01',
      jobRole: 'Software Engineer',
    },
    {
      nameCompany: 'Startup XYZ',
      jobDescription: 'Worked on MVP development and deployment.',
      startDate: '2019-01-01',
      endDate: '2020-06-01',
      jobRole: 'Frontend Developer',
    },
  ],

  skill: 'JavaScript, TypeScript, Vue.js, Node.js, HTML, CSS, Git, REST API',
}

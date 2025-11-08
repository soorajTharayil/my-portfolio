import type { IconType } from 'react-icons'
import {
  SiPhp,
  SiCodeigniter,
  SiMysql,
  SiAngular,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlutter,
  SiApachecordova,
} from 'react-icons/si'
import { FiCpu } from 'react-icons/fi'
import { TbDatabaseCog } from 'react-icons/tb'

export type ThemeMode = 'light' | 'dark'

export type Skill = {
  name: string
  icon: IconType
  level: number
  description: string
}

export type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  image?: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  achievements: string[]
}

export const heroContent = {
  name: 'SOORAJ T S',
  role: 'Software Developer',
  tagline: 'Building scalable web applications with clean UI and robust backend logic.',
  summary:
    'Full-stack developer with a passion for crafting performant experiences across the stack—blending precise front-end engineering with resilient, API-driven backends.',
  resumeLink: '/resume.pdf',
  contactLink: '#contact',
  image: '/images/sooraj-ts.jpg',
  imageAlt: 'Sooraj T S smiling while seated in an office space',
}

export const aboutContent = {
  headline: 'Turning complex ideas into reliable, human-friendly software.',
  bio: `I’m Sooraj T S, a Software Developer based in Bangalore and currently building digital experiences at Efeedor. I specialise in architecting data-driven products with PHP, CodeIgniter, and modern front-end stacks, while ensuring clean interfaces and maintainable codebases.`,
  highlights: [
    '3+ years delivering production-grade web platforms and internal tools.',
    'Built integrations with SMS (DigiMiles), Email (ZeptoMail), and WhatsApp (AiSensy) to automate customer communications.',
    'Experienced in optimising MySQL databases, modularising legacy codebases, and mentoring junior developers.',
  ],
  imageAlt: 'Portrait of Sooraj T S',
  image: '/images/sooraj-ts.jpg',
}

export const skills: Skill[] = [
  {
    name: 'PHP',
    icon: SiPhp,
    level: 90,
    description: 'Robust backend services, REST APIs, and background workers.',
  },
  {
    name: 'CodeIgniter',
    icon: SiCodeigniter,
    level: 85,
    description: 'Modular architectures, secure routing, and reusable libraries.',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    level: 88,
    description: 'Query optimisation, indexing strategies, and data modelling.',
  },
  {
    name: 'AngularJS',
    icon: SiAngular,
    level: 80,
    description: 'Enterprise dashboards, routing, and state management.',
  },
  {
    name: 'Bootstrap',
    icon: SiBootstrap,
    level: 90,
    description: 'Responsive interfaces and rapid prototyping at scale.',
  },
  {
    name: 'HTML5',
    icon: SiHtml5,
    level: 95,
    description: 'Semantic markup and accessibility-first patterns.',
  },
  {
    name: 'CSS3',
    icon: SiCss3,
    level: 92,
    description: 'Reusable component styling and modern layout systems.',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    level: 88,
    description: 'Interactive UI, data visualisations, and client-side logic.',
  },
  {
    name: 'Cordova',
    icon: SiApachecordova,
    level: 75,
    description: 'Hybrid mobile apps with Cordova, optimised for cross-platform delivery.',
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    level: 60,
    description: 'Pixel-perfect mobile experiences compiled for iOS and Android.',
  },
  {
    name: 'API Integrations',
    icon: FiCpu,
    level: 85,
    description: 'Custom integrations with DigiMiles, ZeptoMail, and AiSensy.',
  },
  {
    name: 'System Design',
    icon: TbDatabaseCog,
    level: 80,
    description: 'Designing scalable, maintainable architectures and automations.',
  },
]

export const projects: Project[] = [
  {
    title: 'Efeedor Insights Platform',
    description:
      'Analytical dashboard aggregating customer engagement metrics with real-time alerts and API-driven automations.',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'AngularJS', 'Bootstrap'],
    github: 'https://github.com/yourusername/efeedor-insights',
    demo: 'https://demo.example.com/efeedor-insights',
  },
  {
    title: 'Workflow Automation Suite',
    description:
      'Internal tooling to orchestrate multi-channel communications across SMS, email, and WhatsApp using DigiMiles, ZeptoMail, and AiSensy.',
    tech: ['PHP', 'REST APIs', 'JavaScript', 'MySQL'],
    github: 'https://github.com/yourusername/workflow-automation-suite',
    demo: 'https://demo.example.com/workflow-automation-suite',
  },
  {
    title: 'Client Onboarding Portal',
    description:
      'Self-service onboarding experience with role-based access, document workflows, and onboarding analytics.',
    tech: ['AngularJS', 'Bootstrap', 'PHP', 'MySQL'],
    github: 'https://github.com/yourusername/client-onboarding-portal',
  },
  {
    title: 'Operations Command Center',
    description:
      'Unified interface for monitoring business KPIs, scheduled operations, and escalation management.',
    tech: ['PHP', 'CodeIgniter', 'MySQL', 'Chart.js'],
    github: 'https://github.com/yourusername/operations-command-center',
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: 'Efeedor',
    period: '2021 — Present',
    location: 'Bangalore, India',
    achievements: [
      'Architected and shipped modular CodeIgniter services powering core customer workflows.',
      'Integrated DigiMiles, ZeptoMail, and AiSensy APIs to automate outbound communication with 99.9% delivery rate.',
      'Optimised MySQL queries and caching, reducing dashboard load times by 40%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Freelance & Contract',
    period: '2018 — 2021',
    location: 'Remote',
    achievements: [
      'Delivered responsive web apps and admin portals for SMEs across finance and retail.',
      'Introduced modular design systems using Bootstrap and Tailwind CSS for consistent branding.',
    ],
  },
]

export const contactContent = {
  email: 'sooraj114ts@gmail.com',
  location: 'Bangalore, India',
  social: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sooraj-ts-173a02245/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/soorajTharayil',
    },
  ],
}


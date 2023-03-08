import type { Company } from '@/libs/nodeflair/types'
import type { Seniority } from '@/types'

interface Salaries {
  position: string
  has_user_salaries: boolean
  average_salary_max: string
  average_salary_min: string
}

interface Job {
  title: string
  seniorities: Seniority[]
  time_ago: string
  country: string
  currency: string | null
  description: string
  tech_stacks: string[]
  yoe_min: number
  yoe_max: number
  employment_type: string | null
  salary_min: string
  salary_max: string
  remuneration_frequency: string
  is_salary_estimated: boolean
  url: string
  image_url: string
  apply_url: string
}

export interface JobQuery {
  job: Job
  company: Company
  salaries: Salaries
}

import { Seniority } from '@/types'

export interface Job {
  id?: number
  avatar?: string
  company?: string
  companyPage?: string
  rating?: number
  role?: string
  rolePage?: string
  lastUpdated?: string
  country?: string
  minSalary?: string
  maxSalary?: string
  category?: string
  techStacks?: string[]
  seniorities?: Seniority[]
  employmentType?: string | null
  yearsOfExperience?: number
  description?: string
}

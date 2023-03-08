import type { Company } from '@/libs/nodeflair/types'
import type { Seniority } from '@/types'

interface CompanyName {
  name: string
}

interface JobListing {
  id: number
  job_path: string
  position: string
  title: string
  salary_min: number
  salary_max: number
  currency: string
  remuneration_frequency: string
  company_name: CompanyName[]
  seniority: Seniority[]
  time_ago: string
  company: Company
  is_salary_estimated: boolean
  formatted_salary_min: string
  formatted_salary_max: string
  country: string
}

export interface JobListings {
  job_listings: JobListing[]
  total_listings_count: number
}

import { getRequestWithProxy } from '@/utils'

type JobQuery = {
  job: {
    title: string
    seniorities: string[]
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
  company: {
    name: string
    rating: number
    logo_url: string
    url: string
  }
  salaries: {
    position: string
    has_user_salaries: boolean
    average_salary_max: string
    average_salary_min: string
  }
}

type JobListings = {
  job_listings: {
    id: number
    job_path: string
    position: string
    title: string
    salary_min: number
    salary_max: number
    currency: string
    remuneration_frequency: string
    company_name: { name: string }[]
    seniority: string[]
    time_ago: string
    company: {
      id: number
      rating: number
      companyname: string
      avatar: string
    }
    is_salary_estimated: boolean
    formatted_salary_min: string
    formatted_salary_max: string
    country: string
  }[]
  total_listings_count: number
}

class Nodeflair {
  private readonly domain: string
  private readonly jobEndpoint: string

  constructor() {
    this.domain = 'https://nodeflair.com/api/v2'
    this.jobEndpoint = `${this.domain}/jobs`
  }

  public getJobs(query: string, pages: number, sort_by: 'relevant' | 'recent'): Promise<JobListings> {
    return getRequestWithProxy(`${this.jobEndpoint}/?query=${query}&page=${pages}&sort_by=${sort_by}`)
  }

  public getJob(id: number): Promise<JobQuery> {
    return getRequestWithProxy(`${this.jobEndpoint}/${id}`)
  }
}

export const nodeflair = new Nodeflair()

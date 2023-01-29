export type Job = {
  id: number
  avatar: string
  company: string
  companyPage: string
  rating: number
  role: string
  rolePage: string
  lastUpdated: string
  location: string
  minSalary: string
  maxSalary: string
  category: string
  techStacks?: string[]
  seniorities?: string[]
  jobType: string | null
  yearsOfExperience: number
  jobDescription: string
}

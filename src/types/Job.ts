export type Job = {
  id: number
  avatar: string
  company: string
  companyPage: string
  rating: number
  role: string
  rolePage: string
  lastUpdated: string
  country: string
  minSalary: string
  maxSalary: string
  category: string
  techStacks: string[]
  seniorities: string[]
  employmentType: string | null
  yearsOfExperience: number
  description: string
}

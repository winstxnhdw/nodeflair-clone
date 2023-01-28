export type Job = {
  id: number
  avatar: string
  company: string
  rating: number | undefined
  role: string
  lastUpdated: string
  location: string
  currencyPrefix: string
  minSalary: string
  maxSalary: string
  category: string
  techStacks: string[]
  seniority: string
  jobType: string
  yearsOfExperience: string
  jobDescription: string
}

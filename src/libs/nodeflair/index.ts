import type { JobListings, JobQuery } from '@/libs/nodeflair/types'
import { getRequestWithProxy } from '@/utils'

class Nodeflair {
  private readonly domain: string
  private readonly jobEndpoint: string

  constructor() {
    this.domain = 'https://nodeflair.com/api/v2'
    this.jobEndpoint = `${this.domain}/jobs`
  }

  public async getJobListings(query: string, pages: number, sort_by: 'relevant' | 'recent') {
    const request = await getRequestWithProxy<JobListings>(
      `${this.jobEndpoint}/?query=${query}&page=${pages}&sort_by=${sort_by}`
    )
    return request[0] as JobListings
  }

  public async getJobs(...id: number[]) {
    const endpoints = id.map((id) => `${this.jobEndpoint}/${id}`)
    return getRequestWithProxy<JobQuery>(...endpoints)
  }
}

export const nodeflair = new Nodeflair()

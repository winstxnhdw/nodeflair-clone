import { Loading } from '@/components/Loading'
import { JobInformation } from '@/components/job/JobInformation'
import { JobCardsContainer } from '@/components/job/card/JobCardContainer'
import { nodeflair } from '@/libs/nodeflair'
import type { Job } from '@/types'
import { handleFetch } from '@/utils'
import { useState } from 'react'

const requestJobs = async () => {
  const jobListings = await nodeflair.getJobListings('', 1, 'relevant')

  if (jobListings === undefined) {
    console.error('Failed to fetch job listings')
    return
  }

  const jobIndices = jobListings.job_listings.map(({ id }) => id)
  const jobSpecialisations = jobListings.job_listings.map(({ position }) => position)
  const jobs = await nodeflair.getJobs(...jobIndices)

  return jobs.map((query, i) => {
    return {
      id: jobIndices[i],
      category: jobSpecialisations[i],
      avatar: query.company.logo_url,
      company: query.company.name,
      companyPage: query.company.url,
      rating: query.company.rating,
      role: query.job.title,
      rolePage: query.job.url,
      lastUpdated: query.job.time_ago,
      country: query.job.country,
      minSalary: query.job.salary_min,
      maxSalary: query.job.salary_max,
      techStacks: query.job.tech_stacks,
      seniorities: query.job.seniorities,
      employmentType: query.job.employment_type,
      yearsOfExperience: query.job.yoe_min,
      description: query.job.description,
    } as Job
  })
}

export const JobsPanel = () => {
  const [selectedJob, setSelectedJob] = useState<number>(0)
  const jobs = handleFetch(requestJobs)

  return jobs === undefined ? (
    <Loading />
  ) : (
    <div
      style={{
        maxWidth: '1140px',
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '50px',
      }}>
      <JobCardsContainer jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
      <JobInformation {...jobs[selectedJob]} />
    </div>
  )
}

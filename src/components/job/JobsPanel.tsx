import type { Job } from '@/types'
import { JobCardsContainer } from '@/components/job/card/JobCardContainer'
import { JobInformation } from '@/components/job/JobInformation'
import { Loading } from '@/components/Loading'
import { handleFetch } from '@/utils'
import { nodeflair } from '@/libs/nodeflair'
import { useState } from 'react'

const getJobs = () =>
  handleFetch<Job[]>((setData, ignore) => {
    if (ignore) return

    nodeflair.getJobListings('', 1, 'relevant').then((json) => {
      const jobIndices = json.job_listings.map(({ id }) => id)
      const jobSpecialisations = json.job_listings.map(({ position }) => position)

      nodeflair.getJobs(...jobIndices).then((response) =>
        setData(
          response.map((query, i) => {
            return {
              id: jobIndices[i] as number,
              category: jobSpecialisations[i] as string,
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
              description: query.job.description
            }
          })
        )
      )
    })
  })

export const JobsPanel = () => {
  const [selectedJob, setSelectedJob] = useState<number>(0)
  const jobs = getJobs()

  return jobs === undefined ? (
    <Loading />
  ) : (
    <div
      style={{
        maxWidth: '1140px',
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '50px'
      }}>
      <JobCardsContainer jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
      <JobInformation {...(jobs[selectedJob] as Job)} />
    </div>
  )
}

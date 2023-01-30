import type { Job } from '@/types'
import { JobCardsContainer } from '@/components/job/card/JobCardContainer'
import { JobInformation } from '@/components/job/JobInformation'
import { Loading } from '@/components/Loading'
import { useState } from 'react'
import { handleFetch } from '@/utils'
import { nodeflair } from '@/libs/nodeflair/index.js'

const getJobs = () =>
  handleFetch<Job[]>((setData, ignore) => {
    nodeflair.getJobs(1, 'relevant').then((json) => {
      const jobIndexWithSpecialisations = json.job_listings.map((jobListing) => {
        return {
          id: jobListing.id,
          specialisation: jobListing.position
        }
      })

      Promise.all(
        jobIndexWithSpecialisations.map(async (jobIndexWithSpecialisation) => {
          const response = await nodeflair.getJob(jobIndexWithSpecialisation.id)

          return {
            id: jobIndexWithSpecialisation.id,
            avatar: response.company.logo_url,
            company: response.company.name,
            companyPage: response.company.url,
            rating: response.company.rating,
            role: response.job.title,
            rolePage: response.job.url,
            lastUpdated: response.job.time_ago,
            location: response.job.country,
            minSalary: response.job.salary_min,
            maxSalary: response.job.salary_max,
            category: jobIndexWithSpecialisation.specialisation,
            techStacks: response.job.tech_stacks,
            seniorities: response.job.seniorities,
            jobType: response.job.employment_types,
            yearsOfExperience: response.job.yoe_min,
            jobDescription: response.job.description
          }
        })
      ).then((jobs) => (!ignore ? setData(jobs) : null))
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
        marginBottom: '100px'
      }}>
      <JobCardsContainer jobs={jobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
      <JobInformation {...(jobs[selectedJob] as Job)} />
    </div>
  )
}

import type { Job } from '@/types'
import { JobCard } from '@/components/job/card/JobCard'
import { Dispatch, SetStateAction } from 'react'

type JobsProps = {
  jobs: Job[]
  selectedJob: number
  setSelectedJob: Dispatch<SetStateAction<number>>
}

export const JobCardsContainer = ({ jobs, selectedJob, setSelectedJob }: JobsProps) => (
  <div
    style={{
      width: '427px',
      flexShrink: 0,
      paddingTop: '5px'
    }}>
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job.id)} selected={job.id === selectedJob} />
    ))}
  </div>
)

import styles from '@/components/job/css/job.module.css'
import type { Job } from '@/types'
import type { Dispatch, SetStateAction } from 'react'
import { JobCard } from '@/components/job/card/JobCard'

type JobsProps = {
  jobs: Job[]
  selectedJob: number
  setSelectedJob: Dispatch<SetStateAction<number>>
}

export const JobCardsContainer = ({ jobs, selectedJob, setSelectedJob }: JobsProps) => (
  <div className={styles.container}>
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job.id)} selected={job.id === selectedJob} />
    ))}
  </div>
)

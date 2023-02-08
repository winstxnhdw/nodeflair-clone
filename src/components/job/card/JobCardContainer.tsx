import { JobCard } from '@/components/job/card/JobCard'
import styles from '@/components/job/css/job.module.css'
import type { Job } from '@/types'
import type { Dispatch, SetStateAction } from 'react'

type JobsProps = {
  jobs: Job[]
  selectedJob: number
  setSelectedJob: Dispatch<SetStateAction<number>>
}

export const JobCardsContainer = ({ jobs, selectedJob, setSelectedJob }: JobsProps) => (
  <div className={styles['container']}>
    {jobs.map((job, i) => (
      <JobCard key={job.id} job={job} onClick={() => setSelectedJob(i)} selected={i === selectedJob} />
    ))}
  </div>
)

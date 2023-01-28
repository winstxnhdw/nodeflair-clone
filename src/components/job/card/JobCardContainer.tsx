import { useState } from 'react'
import { JobCard } from '@/components/job/card/JobCard'
import type { Job } from '@/types'

type JobsProps = {
  jobs: Job[]
}

export const JobCardsContainer = ({ jobs }: JobsProps) => {
  const [selectedCard, setSelected] = useState<number | undefined>(undefined)
  const handleClick = (id: number) => setSelected(id !== selectedCard ? id : undefined)

  return (
    <div
      style={{
        width: '427px',
        flexShrink: 0,
        paddingTop: '5px'
      }}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={() => handleClick(job.id)} selected={job.id === selectedCard} />
      ))}
    </div>
  )
}

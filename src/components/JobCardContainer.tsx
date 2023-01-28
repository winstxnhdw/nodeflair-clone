import { JobCard } from '@/components/JobCard'
import type { Job } from '@/types/job'

type JobProps = {
  jobs: Job[]
}

export const JobCardsContainer = ({ jobs }: JobProps) => {
  const jobCards: JSX.Element[] = []
  jobs.forEach((job) => {
    jobCards.push(<JobCard {...job} key={job.id} />)
  })

  return (
    <div
      style={{
        width: '427px',
        flexShrink: 0,
        paddingTop: '5px'
      }}>
      {jobCards}
    </div>
  )
}

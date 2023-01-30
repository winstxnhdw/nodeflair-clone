import type { Job } from '@/types'
import { JobCardTopHeader } from '@/components/job/card/top/JobCardTopHeader'
import { JobCardTopDetail } from '@/components/job/card/top/JobCardTopDetail'

export const JobCardTopSection = (job: Job) => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      position: 'relative',
      minHeight: '100%',
      flexDirection: 'column',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    }}>
    <JobCardTopHeader {...job} />
    <JobCardTopDetail {...job} />
  </div>
)

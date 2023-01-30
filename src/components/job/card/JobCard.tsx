import type { Job, OnClick } from '@/types'
import styles from '@/components/job/css/job.module.css'
import { JobCardTopSection } from '@/components/job/card/top/JobCardTop'
import { JobCardBottomSection } from '@/components/job/card/bottom/JobCardBottom'
import { Divider } from '@/components/job/card/Divider'
import gsap from 'gsap'

type JobCardProps = OnClick & {
  job: Job
  selected: boolean
}

export const JobCard = ({ job, onClick, selected }: JobCardProps) => {
  const onMouseEnter = ({ currentTarget }: any) =>
    gsap.to(currentTarget, {
      y: -4,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
      duration: 0.3,
      ease: 'Expo.easeOut'
    })
  const onMouseLeave = ({ currentTarget }: any) =>
    gsap.to(currentTarget, {
      y: 0,
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      duration: 0.3,
      ease: 'Expo.easeOut'
    })

  return (
    <div style={{ padding: '5px' }}>
      <div
        className="jobCard"
        style={{
          cursor: 'pointer',
          height: '100%',
          position: 'relative',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'white',
          outlineColor: '#1fc76a',
          outlineStyle: `${selected ? 'solid' : 'none'}`,
          outlineWidth: '3px',
          borderRadius: '8px',
          fontSize: '14px',
          paddingBottom: '40px'
        }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <a href={job.companyPage} className={styles['redirect']}></a>
        <div
          style={{
            padding: '20px'
          }}>
          <JobCardTopSection {...job} />
          <Divider />
        </div>
        <JobCardBottomSection {...job} />
      </div>
    </div>
  )
}

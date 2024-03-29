import { Divider } from '@/components/job/card/Divider'
import { JobCardBottomSection } from '@/components/job/card/bottom/JobCardBottom'
import { JobCardTopSection } from '@/components/job/card/top/JobCardTop'
import styles from '@/components/job/css/job.module.css'
import type { Job, OnClick } from '@/types'
import gsap from 'gsap'
import type { SyntheticEvent } from 'react'

type JobCardProps = OnClick & {
  job: Job
  selected: boolean
}

const onMouseEnter = ({ currentTarget }: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
  gsap.to(currentTarget, {
    y: -4,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    duration: 0.3,
    ease: 'Expo.easeOut',
  })
}

const onMouseLeave = ({ currentTarget }: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
  gsap.to(currentTarget, {
    y: 0,
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
    duration: 0.3,
    ease: 'Expo.easeOut',
  })
}

export const JobCard = ({ job, onClick, selected }: JobCardProps) => {
  return (
    <div style={{ padding: '5px' }}>
      <div
        className={styles['card']}
        style={{
          cursor: 'pointer',
          height: '100%',
          position: 'relative',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'white',
          outlineColor: '#1fc76a',
          outlineStyle: `${selected ? 'solid' : 'none'}`,
          borderRadius: '8px',
          fontSize: '14px',
          paddingBottom: '40px',
        }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <a href={job.companyPage} className={styles['redirect']}></a>
        <div
          style={{
            padding: '20px',
          }}>
          <JobCardTopSection {...job} />
          <Divider />
        </div>
        <JobCardBottomSection {...job} />
      </div>
    </div>
  )
}

import { TechStacks } from '@/components/TechStacks'
import type { Job } from '@/types'

export const JobCardBottomSection = ({ techStacks }: Job) => (
  <div
    style={{
      width: '100%',
      bottom: 0,
      padding: '0 15px',
      overflow: 'hidden',
      position: 'absolute',
      minHeight: '40px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      boxSizing: 'border-box',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
    }}>
    {techStacks !== undefined && TechStacks(techStacks)}
  </div>
)

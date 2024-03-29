import { Country } from '@/components/Country'
import { Seniorities } from '@/components/Seniorities'
import { TechStacks } from '@/components/TechStacks'
import { salaryFormatted } from '@/components/helpers/salaryFormatted'
import styles from '@/components/job/css/job.module.css'
import type { Job } from '@/types'
import { Interweave } from 'interweave'

const Breakline = () => (
  <div
    style={{
      width: 'calc(100% + 40px)',
      height: '0.5px',
      margin: '20px -20px',
      backgroundColor: 'hsl(134, 0%, 95%)',
    }}></div>
)

const JobDescription = ({ description }: Job) => (
  <div>
    <div
      style={{
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '1.5em',
        marginBottom: '5px',
      }}>
      Job Description
    </div>
    <div style={{ marginTop: '20px' }}>
      <Interweave content={description ?? ''} />
    </div>
  </div>
)

const JobDetails = ({ minSalary, maxSalary, employmentType, seniorities, yearsOfExperience, techStacks }: Job) => (
  <div
    style={{
      gap: '20px 10px',
      display: 'grid',
      whiteSpace: 'pre-wrap',
      gridTemplateColumns: '1fr 1fr',
    }}>
    {minSalary && maxSalary && (
      <div>
        <b>Salary</b>
        <div>
          <div
            style={{
              display: 'inline-block',
              marginBottom: '2px',
            }}>
            {salaryFormatted(minSalary, maxSalary, 'Monthly')}
          </div>
        </div>
      </div>
    )}
    <div>
      <b>Job Type</b>
      <div>{`${!employmentType ? '-' : employmentType}`}</div>
    </div>
    {seniorities && <Seniorities seniorities={seniorities} />}
    <div>
      <b>Years of Experience</b>
      <div>At least {yearsOfExperience} years</div>
    </div>
    {techStacks !== undefined && techStacks.length !== 0 && (
      <div
        style={{
          gridColumn: '1 / span 2',
        }}>
        <b>Tech Stacks</b>
        <div>{TechStacks(techStacks)}</div>
      </div>
    )}
  </div>
)

const JobHeader = ({ avatar, company, companyPage, role, rolePage, lastUpdated, country }: Job) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
    }}>
    <img
      src={avatar}
      style={{
        width: '65px',
        height: '65px',
        background: 'white',
        flexShrink: 0,
        marginRight: '20px',
        borderRadius: '5px',
      }}
    />
    <div style={{ flexShrink: 1 }}>
      <div
        style={{
          whiteSpace: 'pre-wrap',
          marginBottom: '5px',
        }}>
        {company}
        <a href={companyPage} style={{ paddingLeft: '12px', color: '#1fc76a' }}>
          Go to Company Page{' '}
        </a>
      </div>
      <a
        href={rolePage}
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          lineHeight: '1.5em',
          marginBottom: '5px',
          color: 'black',
          textDecoration: 'none',
        }}>
        {role}
      </a>
      <div
        style={{
          color: '#838383',
          whiteSpace: 'pre-wrap',
        }}>
        <span style={{ paddingRight: '15px' }}>{lastUpdated}</span>
        {country && <Country country={country} />}
      </div>
    </div>
  </div>
)

export const JobInformation = (job: Job) => (
  <div className={styles['information']}>
    <div
      style={{
        padding: '0 5px 50px 0',
        maxHeight: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        height: '100vh',
      }}>
      <div
        style={{
          margin: '0',
          padding: '29px 20px',
          flexGrow: 1,
          fontSize: '14px',
          boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          overflowWrap: 'break-word',
          backgroundColor: 'white',
        }}>
        <JobHeader {...job} />
        <Breakline />
        <JobDetails {...job} />
        <Breakline />
        <JobDescription {...job} />
      </div>
    </div>
  </div>
)

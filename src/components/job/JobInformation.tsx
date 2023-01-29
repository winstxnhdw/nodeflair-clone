import styles from '@/components/job/css/job.module.css'
import type { Job } from '@/types'
import { Country } from '@/components/Country'
import { TechStacks } from '@/components/TechStacks'
import { Interweave } from 'interweave'

const Breakline = () => (
  <div
    style={{
      width: 'calc(100% + 40px)',
      height: '0.5px',
      margin: '20px -20px',
      backgroundColor: 'hsl(134, 0%, 95%)'
    }}></div>
)

const JobDescription = ({ jobDescription }: Job) => (
  <div>
    <div
      style={{
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '1.5em',
        marginBottom: '5px'
      }}>
      Job Description
    </div>
    <div style={{ marginTop: '20px' }}>
      <Interweave content={jobDescription} />
    </div>
  </div>
)

const JobDetails = ({
  currencyPrefix,
  minSalary,
  maxSalary,
  jobType,
  seniority,
  yearsOfExperience,
  techStacks
}: Job) => (
  <div
    style={{
      gap: '20px 10px',
      display: 'grid',
      whiteSpace: 'pre-wrap',
      gridTemplateColumns: '1fr 1fr'
    }}>
    <div>
      <b>Salary</b>
      <div>
        <div
          style={{
            display: 'inline-block',
            marginBottom: '2px'
          }}>
          {currencyPrefix}
          {minSalary} - {currencyPrefix}
          {maxSalary} / Monthly
        </div>
      </div>
    </div>
    <div>
      <b>Job Type</b>
      <div>{jobType}</div>
    </div>
    <div>
      <b>Seniority</b>
      <div>
        <div
          style={{
            color: '#838383',
            margin: '0 0 5px 0',
            display: 'inline-block',
            padding: '5px 8px',
            fontFamily: 'Roboto Mono',
            fontWeight: 'bold',
            borderRadius: '5px',
            backgroundColor: '#f1f1f1'
          }}>
          {seniority}
        </div>
      </div>
    </div>
    <div>
      <b>Years of Experience</b>
      <div>{yearsOfExperience}</div>
    </div>
    <div
      style={{
        gridColumn: '1 / span 2'
      }}>
      <b>Tech Stacks</b>
      <div>{TechStacks(techStacks)}</div>
    </div>
  </div>
)

const JobHeader = ({ avatar, company, companyPage, role, rolePage, lastUpdated, location }: Job) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start'
    }}>
    <img
      src={avatar}
      style={{
        width: '65px',
        height: '65px',
        background: 'white',
        flexShrink: 0,
        marginRight: '20px',
        borderRadius: '5px'
      }}
    />
    <div style={{ flexShrink: 1 }}>
      <div
        style={{
          whiteSpace: 'pre-wrap',
          marginBottom: '5px'
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
          textDecoration: 'none'
        }}>
        {role}
      </a>
      <div
        style={{
          color: '#838383',
          whiteSpace: 'pre-wrap'
        }}>
        <span style={{ paddingRight: '15px' }}>{lastUpdated}</span>
        <Country country={location} />
      </div>
    </div>
  </div>
)

export const JobInformation = (job: Job) => (
  <div className={styles.information}>
    <div
      style={{
        padding: '0 5px 50px 0',
        maxHeight: 'calc(100vh - 106px)'
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
          backgroundColor: 'white'
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

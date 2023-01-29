import type { Job, OnClick } from '@/types'
import { Country } from '@/components/Country'
import { TechStacks } from '@/components/TechStacks'

type JobCardProps = OnClick & {
  job: Job
  selected: boolean
}

const JobCardTopSectionInformation = ({ avatar, company, rating, category, role }: Job) => (
  <div
    style={{
      flexWrap: 'nowrap',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }}>
    <div
      className="avatarContainer"
      style={{
        width: 'max-content',
        height: 'max-content',
        margin: '0 10px 0 0'
      }}>
      <img
        src={avatar}
        style={{
          float: 'left',
          width: '45px',
          height: '45px',
          borderRadius: '4px'
        }}
      />
    </div>
    <div
      className="specialisationTag"
      style={{
        order: 3,
        marginLeft: 'auto',
        paddingLeft: '10px'
      }}>
      <div
        style={{
          color: '#1fc76a',
          width: 'max-content',
          padding: '5px 8px',
          fontWeight: '600',
          borderRadius: '5px',
          backgroundColor: '#ddf7e9'
        }}>
        {category}
      </div>
    </div>
    <div
      className="informationContainer"
      style={{
        flexBasis: 'auto',
        marginTop: 0,
        flexShrink: 1
      }}>
      <p
        className="companyNameAndRating"
        style={{
          marginBottom: '2px',
          whiteSpace: 'pre-wrap',
          marginTop: '0px'
        }}>
        <span>{company}</span>
        <span
          style={{
            paddingLeft: '10px'
          }}>
          {rating === undefined ? '' : `${rating}★`}
        </span>
      </p>
      <h2
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          whiteSpace: 'initial',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          fontSize: '16px',
          lineHeight: '1.5em',
          margin: '0',
          fontWeight: 'bold'
        }}>
        {role}
      </h2>
    </div>
  </div>
)

const JobCardTopSectionDetail = ({ lastUpdated, location, currencyPrefix, minSalary, maxSalary }: Job) => (
  <div
    style={{
      paddingLeft: '55px',
      width: '100%',
      marginBottom: 'auto'
    }}>
    <div
      className="recencyInformationAndCountry"
      style={{
        color: '#838383',
        margin: '0 0 6px 0',
        whiteSpace: 'pre-wrap'
      }}>
      <span
        className="recencyInformation"
        style={{
          color: '#1fc76a',
          fontWeight: 'bold',
          paddingRight: '1em'
        }}>
        {lastUpdated}
      </span>
      <Country country={location} />
    </div>
    <div>
      <p className="jobListingCardSalary">
        {currencyPrefix}
        {minSalary} - {currencyPrefix}
        {maxSalary} / mth
      </p>
    </div>
  </div>
)

const JobCardTopSection = (job: Job) => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      position: 'relative',
      minHeight: '100%',
      flexDirection: 'column',
      backgroundColor: 'white',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    }}>
    <JobCardTopSectionInformation {...job} />
    <JobCardTopSectionDetail {...job} />
  </div>
)

const JobCardBottomSection = ({ techStacks }: Job) => (
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
      backgroundColor: 'white',
      boxSizing: 'border-box',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px'
    }}>
    {TechStacks(techStacks)}
  </div>
)

export const JobCard = ({ job, onClick, selected }: JobCardProps) => (
  <div style={{ padding: '5px' }}>
    <div
      className="jobCard"
      style={{
        cursor: 'pointer',
        height: '100%',
        position: 'relative',
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
        outlineColor: '#1fc76a',
        outlineStyle: `${selected ? 'solid' : 'none'}`,
        outlineWidth: '3px',
        borderRadius: '8px',
        fontSize: '14px',
        paddingBottom: '40px',
        backgroundColor: '#f8f8f8'
      }}
      onClick={onClick}>
      <div
        style={{
          padding: '20px'
        }}>
        <JobCardTopSection {...job} />
        <div
          style={{
            content: '',
            borderBottom: '1px solid #dfdfdf',
            marginTop: '10px',
            marginBottom: '-15px'
          }}></div>
      </div>
      <JobCardBottomSection {...job} />
    </div>
  </div>
)

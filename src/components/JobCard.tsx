import type { Job } from '@/types/job'

const JobCardTopSectionInformation = ({ avatar, company, rating, category, role }: Job) => (
  <div
    style={{
      flexWrap: 'wrap',
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
        loading="lazy"
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
        <span> {company}</span>
        <span>{rating === undefined ? '' : ` ${rating}★`}</span>
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
          fontFamily: 'Open Sans',
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
          fontWeight: 'bold'
        }}>
        {lastUpdated}
      </span>
      <div
        className="country"
        style={{
          display: 'inline-block'
        }}>
        <img
          src="/mapMarker.svg"
          style={{
            overflow: 'visible',
            boxSizing: 'content-box',
            display: 'inline-block',
            height: '1em',
            verticalAlign: '-0.125em'
          }}
        />{' '}
        {location}
      </div>
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
      padding: '20px',
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
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px'
    }}>
    {techStacks.map((techStack) => (
      <span
        style={{
          color: '#838383',
          display: 'inline-block',
          padding: '5px 8px',
          overflow: 'hidden',
          maxWidth: '90%',
          fontFamily: 'Roboto Mono',
          fontWeight: 'bold',
          borderRadius: '5px',
          textOverflow: 'ellipsis',
          backgroundColor: '#f1f1f1'
        }}>
        {techStack}
      </span>
    ))}
  </div>
)

export const JobCard = (job: Job) => (
  <div style={{ padding: '5px' }}>
    <div
      className="jobCard"
      style={{
        cursor: 'pointer',
        height: '100%',
        position: 'relative',
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        fontSize: '14px',
        paddingBottom: '40px',
        backgroundColor: '#f8f8f8'
      }}>
      <JobCardTopSection {...job} />
      <JobCardBottomSection {...job} />
    </div>
  </div>
)

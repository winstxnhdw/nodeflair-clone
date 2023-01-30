import type { Job } from '@/types'
import { salaryFormatted } from '@/components/helpers/salaryFormatted'
import { Country } from '@/components/Country'

export const JobCardTopDetail = ({ lastUpdated, location, minSalary, maxSalary }: Job) => (
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
        {lastUpdated} ago
      </span>
      <Country country={location} />
    </div>
    <div>
      <p className="jobListingCardSalary">{salaryFormatted(minSalary, maxSalary, 'mth')}</p>
    </div>
  </div>
)

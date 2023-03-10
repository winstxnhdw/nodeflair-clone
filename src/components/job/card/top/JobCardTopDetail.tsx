import { Country } from '@/components/Country'
import { salaryFormatted } from '@/components/helpers/salaryFormatted'
import type { Job } from '@/types'

export const JobCardTopDetail = ({ lastUpdated, country, minSalary, maxSalary }: Job) => (
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
      <Country country={country} />
    </div>
    {minSalary !== '' && (
      <div>
        <p className="jobListingCardSalary">{salaryFormatted(minSalary, maxSalary, 'mth')}</p>
      </div>
    )}
  </div>
)

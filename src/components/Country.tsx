import { MapMarker } from '@/components/MapMarker'

type CountryProps = {
  country: string
}

export const Country = ({ country }: CountryProps) => (
  <div
    style={{
      display: 'inline-block'
    }}>
    <MapMarker /> {country}
  </div>
)

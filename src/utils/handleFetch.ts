import { useEffect, useState } from 'react'

export const handleFetch = <T>(getData: () => Promise<T>) => {
  const [data, setData] = useState<T>()

  useEffect(() => {
    let ignore = false
    ;(() => (!ignore ? void getData().then(setData).catch(console.error) : null))() // eslint-disable-line

    return () => {
      ignore = true
    }
  }, [])

  return data
}

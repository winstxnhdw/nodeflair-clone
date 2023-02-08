import { useEffect, useState } from 'react'

export const handleFetch = <T>(getData: () => Promise<T>) => {
  const [data, setData] = useState<T>()

  useEffect(() => {
    let ignore = false
    ;(() => (!ignore ? getData().then(setData) : null))()

    return () => {
      ignore = true
    }
  }, [])

  return data
}

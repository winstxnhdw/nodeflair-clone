import type { Dispatch, SetStateAction } from 'react'
import { useState, useEffect } from 'react'

export const handleFetch = <T>(
  action: (setData: Dispatch<SetStateAction<T | undefined>>, ignore: boolean) => void
): T => {
  const [data, setData] = useState<T>()
  useEffect(() => {
    let ignore = false
    action(setData, ignore)
    return () => {
      ignore = true
    }
  }, [])

  return data as T
}

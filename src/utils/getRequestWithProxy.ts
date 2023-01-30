import { config } from '@/config'

export const getRequestWithProxy = async (url: string) => {
  const request = await fetch(
    `${config.VITE_PROXY_ENDPOINT}?${new URLSearchParams({
      url: encodeURIComponent(url)
    })}`
  )

  return request.json()
}

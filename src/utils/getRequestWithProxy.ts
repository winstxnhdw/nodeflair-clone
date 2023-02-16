import { config } from '@/config'

export const getRequestWithProxy = async <T>(...endpoints: string[]): Promise<T[]> => {
  const request = await fetch(config.VITE_PROXY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      endpoints: endpoints
    })
  })

  const response: string[] = await request.json()
  return response.map((res) => JSON.parse(res))
}

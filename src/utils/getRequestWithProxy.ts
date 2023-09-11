import { config } from '@/config'

const getRequest = async (...endpoints: string[]): Promise<string[]> => {
  const endpointsWithHeaders = endpoints.map((endpoint) => {
    return {
      endpoint: endpoint,
      headers: {
        'User-Agent': 'worker-proxy',
      },
    }
  })

  const request = await fetch(config.VITE_PROXY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      endpoints: endpointsWithHeaders,
    }),
  })

  return request.json() as Promise<string[]>
}

export const getRequestWithProxy = async <T>(...endpoints: string[]): Promise<T[]> => {
  const response = await getRequest(...endpoints)
  return response.map((res) => JSON.parse(res) as unknown) as T[]
}

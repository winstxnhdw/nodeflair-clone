import { config } from '@/config'

type ProxyResponse = {
  responses: string[]
}

const getRequest = async (...endpoints: string[]): Promise<ProxyResponse> => {
  const endpointsWithHeaders = endpoints.map((endpoint) => {
    return {
      endpoint: endpoint,
      headers: { 'User-Agent': 'worker-proxy' },
    }
  })

  const request = await fetch(config.VITE_PROXY_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ batch: endpointsWithHeaders }),
    headers: { 'Content-Type': 'application/json' },
  })

  return request.json() as Promise<ProxyResponse>
}

export const getRequestWithProxy = async <T>(...endpoints: string[]): Promise<T[]> => {
  const { responses } = await getRequest(...endpoints)
  return responses.map((res) => JSON.parse(res) as unknown) as T[]
}

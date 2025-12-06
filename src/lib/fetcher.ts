import { env } from './env'

// Basic SWR fetcher with cache headers
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object
    ;(error as any).info = await res.json()
    ;(error as any).status = res.status
    throw error
  }

  return res.json()
}

// Price API adapter
export async function fetchPrice(token: string) {
  try {
    const response = await fetcher<{ price: number; timestamp: number }>(
      `${env.priceApi}?token=${token}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
      }
    )
    return response
  } catch (error) {
    console.error('Failed to fetch price:', error)
    return { price: 0, timestamp: Date.now() }
  }
}

// Candles API adapter
export async function fetchCandles(token: string, interval: '5m' | '1h' | '1d' = '5m') {
  try {
    const response = await fetcher<{
      candles: Array<[number, number, number, number, number]>
      interval: string
    }>(`${env.candlesApi}?token=${token}&interval=${interval}`)
    return response
  } catch (error) {
    console.error('Failed to fetch candles:', error)
    return { candles: [], interval: '5m' }
  }
}

// Pools API adapter
export async function fetchPools() {
  try {
    const response = await fetcher<{
      pools: Array<{
        id: string
        tokenA: string
        tokenB: string
        tvl: number
        volume24h: number
        fees24h: number
      }>
    }>(env.poolsApi)
    return response
  } catch (error) {
    console.error('Failed to fetch pools:', error)
    return { pools: [] }
  }
}

// Edge-cached fetcher with SWR-like behavior
export async function cachedFetcher<JSON = any>(
  key: string,
  fetchFn: () => Promise<JSON>,
  ttl: number = 60 * 1000 // 1 minute default
) {
  // In a real implementation, this would use a proper cache
  // For now, we'll just call the fetch function
  return fetchFn()
}
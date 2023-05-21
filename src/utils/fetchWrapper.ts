export async function fetchWrapper<T = unknown>(input: RequestInfo | URL, init?: RequestInit | undefined) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${input}`, init)
  const result = await response.json()
  
  return result.data ? result.data : result as T
}

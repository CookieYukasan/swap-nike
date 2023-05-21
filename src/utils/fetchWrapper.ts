export async function fetchWrapper<T = unknown>(input: RequestInfo | URL, init?: RequestInit | undefined) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${input}`, init)
  
  try {
    const result = await response.json()
    return result as T
  } catch (error) {
    const result = await response.text()
    return result as T
  }

}

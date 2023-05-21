import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { pathname, searchParams } = new URL(request.url)
  const limit = Number(searchParams.get('limit'))
  const data = await fetch(`https://64644030043c103502b5a448.mockapi.io${pathname}`).then(res => res.json())
  
  return NextResponse.json(limit ? { data: data.slice(0, limit) } : { data })
}
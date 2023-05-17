import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { pathname } = new URL(request.url)
    const data = await fetch(`https://64644030043c103502b5a448.mockapi.io${pathname}`).then(res => res.json())
    
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: true, message: 'API Error.' })
  }
}

import { NextResponse } from 'next/server'
// import path from 'path'
// import { promises as fs } from 'fs'

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url)
//   const limit = Number(searchParams.get('_limit'))
//   const jsonDirectory = path.join(process.cwd(), 'json')
//   const data = await fs.readFile(jsonDirectory + '/data.json', 'utf-8')

//   if (limit) return NextResponse.json(JSON.parse(data)['sneakers'].slice(0, limit))

//   return NextResponse.json(JSON.parse(data)['sneakers'])
// }

export async function GET(request: Request) {
  const { pathname, searchParams } = new URL(request.url)
  const limit = Number(searchParams.get('limit'))
  const data = await fetch(`https://64644030043c103502b5a448.mockapi.io${pathname}`).then(res => res.json())
  
  return NextResponse.json(limit ? data.slice(0, limit) : data)
}
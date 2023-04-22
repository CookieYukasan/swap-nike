import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Number(searchParams.get('_limit'))
  const jsonDirectory = path.join(process.cwd(), 'json')
  const data = await fs.readFile(jsonDirectory + '/data.json', 'utf-8')

  if (limit) return NextResponse.json(JSON.parse(data)['sneakers'].slice(0, limit))

  return NextResponse.json(JSON.parse(data)['sneakers'])
}

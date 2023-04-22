import { NextResponse } from 'next/server'
import { SneakerProps } from '@/@types'
import { getDatabase } from '../../_utils/_functions'

export async function GET(request: Request, context: any) {
  const id = Number(context.params.id)

  try {
    const dbItems = await getDatabase<SneakerProps[]>('sneakers')

    const data = [...dbItems].find((item) => item.id === id)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: true, message: 'API Error.' })
  }
}

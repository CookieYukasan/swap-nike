import { SneakerProps } from '@/@types'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '@/components/Accordion'
import { useSneakersStore } from '@/store/useSneakersStore'
import { fetchWrapper } from '@/utils/fetchWrapper'
import { SizeFilter } from './_components/Filters'
import { SneakersGrid } from './_components/SneakersGrid'
import { ViewMoreButton } from './_components/ViewMoreButton'
import { InitializerStore } from './_initializerStore'

export const metadata = {
  title: 'All Sneakers',
}

const accordionItems = [
  {
    title: 'Size',
    content: <SizeFilter />,
  },
  {
    title: 'Genre',
    content: <h1>Genre Filter</h1>,
  },
  {
    title: 'Models',
    content: <h1>Models Filter</h1>,
  },
  {
    title: 'Country',
    content: <h1>Country Filter</h1>,
  },
]

export default async function SneakersPage() {
  const sneakersData = await fetchWrapper<SneakerProps[]>('/sneakers?limit=9', { method: 'GET' })
  useSneakersStore.setState({ sneakers: sneakersData })

  return (
    <>
      <InitializerStore sneakers={sneakersData ?? []} />

      <main className="container mx-auto">
        <div className="mt-8 grid grid-cols-12">
          <div className="col-span-3">
            <div className="sticky top-4">
              <AccordionRoot className="mr-6 space-y-6" type="single" defaultValue="size" collapsible>
                {accordionItems.map((item) => (
                  <AccordionItem key={item.title.toLowerCase()} value={item.title.toLowerCase()}>
                    <AccordionTrigger className="flex w-full items-center justify-between">
                      <h1 className="text-xl font-medium text-black">{item.title}</h1>
                    </AccordionTrigger>
                    <AccordionContent className="mt-6">{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
              {/* <h2 className="mb-6 text-xl font-bold">Brands</h2> */}
            </div>
          </div>

          <div className="col-span-9 flex flex-col items-center">
            <SneakersGrid />
            <ViewMoreButton />
          </div>
        </div>
      </main>
    </>
  )
}

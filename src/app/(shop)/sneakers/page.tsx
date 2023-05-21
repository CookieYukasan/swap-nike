import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '@/components/Accordion'
import { useSneakersStore } from '@/store/useSneakersStore'
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

const sneakersData = [
  {
    id: '884894297050',
    title: 'Oriental Fresh Tuna',
    date: '2022-07-10T12:10:05.225Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=61487',
      'https://loremflickr.com/800/500/sneakers?lock=90004',
      'https://loremflickr.com/800/500/sneakers?lock=39963',
      'https://loremflickr.com/800/500/sneakers?lock=10992',
      'https://loremflickr.com/800/500/sneakers?lock=5632',
      'https://loremflickr.com/800/500/sneakers?lock=69289',
    ],
    author: {
      id: 905168613649,
      userName: 'Alessandra79',
      email: 'Jodie_Welch82@yahoo.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg',
    },
    isFavorite: true,
    sizes: [28],
    isAvailable: true,
    actionRemainingDate: '2023-05-02',
    currentBid: 1300,
    offers: [
      {
        id: 0,
        value: 1300,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613649,
        author: {
          id: 905168613649,
          userName: 'Stunner',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1160.jpg',
        },
      },
      {
        id: 1,
        value: 856,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613641,
        author: {
          id: 905168613641,
          userName: 'Night',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/280.jpg',
        },
      },
      {
        id: 2,
        value: 306.17,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 90516861364,
        author: {
          id: 90516861364,
          userName: 'Cookie',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1133.jpg',
        },
      },
    ],
  },
  {
    id: '324522979280',
    title: 'Tasty Granite Shoes',
    date: '2023-04-04T15:01:01.634Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=16789',
      'https://loremflickr.com/800/500/sneakers?lock=23469',
      'https://loremflickr.com/800/500/sneakers?lock=91218',
      'https://loremflickr.com/800/500/sneakers?lock=5823',
    ],
    author: {
      id: 907043524179,
      userName: 'Cade.Bahringer22',
      email: 'Florencio.Heathcote@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/280.jpg',
    },
    isFavorite: false,
    sizes: [34],
    isAvailable: true,
    actionRemainingDate: '2023-05-02',
    currentBid: 2351,
    offers: [
      {
        id: 0,
        value: 2351,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613649,
        author: {
          id: 905168613649,
          userName: 'Stunner',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg',
        },
      },
      {
        id: 1,
        value: 1856,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613641,
        author: {
          id: 905168613641,
          userName: 'Night',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1000.jpg',
        },
      },
      {
        id: 2,
        value: 1220,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613643,
        author: {
          id: 905168613643,
          userName: 'Cookie',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1160.jpg',
        },
      },
    ],
  },
  {
    id: '768856577428',
    title: 'Bespoke Bronze Hat',
    date: '2022-08-16T10:49:38.149Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=94203',
      'https://loremflickr.com/800/500/sneakers?lock=62178',
      'https://loremflickr.com/800/500/sneakers?lock=42985',
      'https://loremflickr.com/800/500/sneakers?lock=93031',
    ],
    author: {
      id: 730232355868,
      userName: 'Bailey_Ankunding',
      email: 'Jazmyn.Littel92@yahoo.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg',
    },
    isFavorite: false,
    sizes: [38],
    isAvailable: false,
    buyer: {
      id: 245695351355,
      userName: 'Callie58',
      email: 'Annamae_Gorczany95@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg',
    },
    soldValue: 103.14,
  },
  {
    id: '141441714654',
    title: 'Incredible Metal Fish',
    date: '2022-08-09T08:52:15.570Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=7165',
      'https://loremflickr.com/800/500/sneakers?lock=81605',
      'https://loremflickr.com/800/500/sneakers?lock=39855',
      'https://loremflickr.com/800/500/sneakers?lock=47504',
    ],
    author: {
      id: 164835090364,
      userName: 'Cheyenne.Denesik',
      email: 'Lou56@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/999.jpg',
    },
    isFavorite: false,
    sizes: [37],
    isAvailable: false,
    buyer: {
      id: 695950921209,
      userName: 'Mac.Grimes',
      email: 'Ardella77@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/579.jpg',
    },
    soldValue: 941.04,
  },
  {
    id: '688906565651',
    title: 'Rustic Steel Mouse',
    date: '2022-12-06T01:41:07.849Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=3679',
      'https://loremflickr.com/800/500/sneakers?lock=13777',
      'https://loremflickr.com/800/500/sneakers?lock=92703',
      'https://loremflickr.com/800/500/sneakers?lock=9853',
      'https://loremflickr.com/800/500/sneakers?lock=20311',
      'https://loremflickr.com/800/500/sneakers?lock=60507',
    ],
    author: {
      id: 181643210374,
      userName: 'Enrique.Konopelski76',
      email: 'Cheyanne.Kub@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/607.jpg',
    },
    isFavorite: false,
    sizes: [33],
    isAvailable: true,
    actionRemainingDate: '2023-05-02',
    currentBid: 965.83,
    offers: [
      {
        id: 0,
        value: 965.83,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613649,
        author: {
          id: 905168613649,
          userName: 'Stunner',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg',
        },
      },
      {
        id: 1,
        value: 851,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613641,
        author: {
          id: 905168613641,
          userName: 'Night',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1000.jpg',
        },
      },
      {
        id: 2,
        value: 530,
        createdAt: '2022-07-10T12:10:05.225Z',
        authorId: 905168613643,
        author: {
          id: 905168613643,
          userName: 'Cookie',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1160.jpg',
        },
      },
    ],
  },
  {
    id: '154740503841',
    title: 'Refined Cotton Shirt',
    date: '2022-07-30T22:53:38.309Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=46211',
      'https://loremflickr.com/800/500/sneakers?lock=73488',
      'https://loremflickr.com/800/500/sneakers?lock=55802',
      'https://loremflickr.com/800/500/sneakers?lock=33465',
      'https://loremflickr.com/800/500/sneakers?lock=47690',
    ],
    author: {
      id: 710606266251,
      userName: 'Chadd22',
      email: 'Ida.Fisher29@hotmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1133.jpg',
    },
    isFavorite: false,
    sizes: [38],
    isAvailable: false,
    buyer: {
      id: 287018317113,
      userName: 'Jordi_Huels26',
      email: 'Alexys.Spencer@gmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/875.jpg',
    },
    soldValue: 711.36,
  },
  {
    id: '845861378651',
    title: 'Electronic Cotton Bacon',
    date: '2022-10-22T16:36:09.950Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=89098',
      'https://loremflickr.com/800/500/sneakers?lock=58925',
      'https://loremflickr.com/800/500/sneakers?lock=80483',
      'https://loremflickr.com/800/500/sneakers?lock=53698',
      'https://loremflickr.com/800/500/sneakers?lock=65166',
      'https://loremflickr.com/800/500/sneakers?lock=88876',
    ],
    author: {
      id: 789630348377,
      userName: 'Lucile31',
      email: 'Reyes56@gmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg',
    },
    isFavorite: true,
    sizes: [29],
    isAvailable: false,
    buyer: {
      id: 391470967437,
      userName: 'Ofelia.Heller',
      email: 'Darwin39@gmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/337.jpg',
    },
    soldValue: 393.07,
  },
  {
    id: '941758880334',
    title: 'Oriental Fresh Tuna',
    date: '2022-08-24T00:18:20.155Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=78348',
      'https://loremflickr.com/800/500/sneakers?lock=6255',
      'https://loremflickr.com/800/500/sneakers?lock=41062',
      'https://loremflickr.com/800/500/sneakers?lock=635',
    ],
    author: {
      id: 381960164127,
      userName: 'Gloria_Rau56',
      email: 'Elliot_Runte93@gmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg',
    },
    isFavorite: false,
    sizes: [39],
    isAvailable: false,
    buyer: {
      id: 294421812518,
      userName: 'Gladyce18',
      email: 'Dusty.Lesch16@gmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/511.jpg',
    },
    soldValue: 523.34,
  },
  {
    id: '979015090598',
    title: 'Incredible Soft Gloves',
    date: '2022-11-30T20:20:25.246Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=21245',
      'https://loremflickr.com/800/500/sneakers?lock=33649',
      'https://loremflickr.com/800/500/sneakers?lock=86871',
      'https://loremflickr.com/800/500/sneakers?lock=11766',
      'https://loremflickr.com/800/500/sneakers?lock=39241',
    ],
    author: {
      id: 594792885902,
      userName: 'Jennyfer98',
      email: 'Isabella.McKenzie79@gmail.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/630.jpg',
    },
    isFavorite: true,
    sizes: [35],
    isAvailable: false,
    buyer: {
      id: 364262253811,
      userName: 'Karina_Balistreri',
      email: 'Ricardo_Dickinson@yahoo.com',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg',
    },
    soldValue: 715.83,
  },
]

export default async function SneakersPage() {
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

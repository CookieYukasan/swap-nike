import { Avatar } from '@/components/Avatar'
import { Metadata } from 'next'
import { ProfileTabs } from './_components/ProfileTabs'

interface MetadataProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { id } = params

  return {
    title: 'Adson Martins',
    description: `Perfil do usuário: ${id}`,
    openGraph: {
      images: [
        {
          url: 'https://spaceshipws.vercel.app/web/images/team/adson-martins.jpg',
          width: 128,
          height: 128,
          alt: 'Foto de Adson Martins',
        },
      ],
    },
  }
}

const forSaleSneakers = [
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
]

const acquiredSneakers = [
  {
    id: '884894297050',
    title: 'Oriental Fresh Tuna',
    date: '2022-07-10T12:10:05.225Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=10992',
      'https://loremflickr.com/800/500/sneakers?lock=61487',
      'https://loremflickr.com/800/500/sneakers?lock=90004',
      'https://loremflickr.com/800/500/sneakers?lock=39963',
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
      'https://loremflickr.com/800/500/sneakers?lock=5823',
      'https://loremflickr.com/800/500/sneakers?lock=16789',
      'https://loremflickr.com/800/500/sneakers?lock=23469',
      'https://loremflickr.com/800/500/sneakers?lock=91218',
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
    id: '324522979280',
    title: 'Tasty Granite Shoes',
    date: '2023-04-04T15:01:01.634Z',
    images: [
      'https://loremflickr.com/800/500/sneakers?lock=23469',
      'https://loremflickr.com/800/500/sneakers?lock=5823',
      'https://loremflickr.com/800/500/sneakers?lock=16789',
      'https://loremflickr.com/800/500/sneakers?lock=91218',
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
]

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          src="https://www.beyondgames.biz/wp-content/uploads/2021/12/Nike-RTFKT.png"
          alt="Nike Banner"
          className="h-56 w-full object-cover"
        />
        <Avatar
          className="absolute -bottom-16 left-6 border-3 border-white"
          src="https://spaceshipws.vercel.app/web/images/team/adson-martins.jpg"
          alt="User Image"
          size={128}
        />
      </div>
      <div className="mb-8 mt-2" style={{ marginLeft: 168 }}>
        <h1 className="text-xl font-medium text-black">Adson Martins</h1>
        <p className="mt-2 text-[#7C8089]">Last seen at 12:30PM</p>
      </div>
      <div>
        <ProfileTabs forSale={forSaleSneakers} acquired={acquiredSneakers} />
      </div>
    </div>
  )
}

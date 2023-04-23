import { SneakerProps, UserProps } from '@/@types'
import { fetchWrapper } from '@/utils/fetchWrapper'
import FavoriteButton from './_components/FavoriteButton'
import ImagesGrid from './_components/ImagesGrid'
import { Avatar } from '@/components/Avatar'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { AuctionBanner } from './_components/AuctionBanner'
import MakeOffer from './_components/MakeOffer'
import formatCurrency from '@/utils/formatCurrency'

type MetadataProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getProduct(id: string) {
  return fetchWrapper<SneakerProps>(`/sneakers/${id}`, {
    method: 'GET',
  })
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { id } = params

  const { title, images } = await getProduct(id)

  if (!images) notFound()

  return {
    title,
    description: `${title} - Description`,
    openGraph: {
      images: [
        {
          url: images[0],
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const data = await fetchWrapper<SneakerProps[]>('/sneakers', { method: 'GET', cache: 'no-cache' })

  return data.map((item) => ({
    id: String(item.id),
  }))
}

export default async function Product({ params }: { params: { id: string } }) {
  const { id } = params

  const { images, isFavorite, title, author, sizes, isAvailable, buyer, actionRemainingDate } = await getProduct(id)
  if (!images) notFound()

  const userDisplay = buyer ? buyer : author

  const offersAmounts = Array.from({ length: 3 })
    .map(() => Math.random() * 1000)
    .sort((a, b) => b - a)

  return (
    <>
      {actionRemainingDate && <AuctionBanner auctionRemainingDate={actionRemainingDate} />}
      <main className="container mx-auto mt-8 grid grid-cols-12 gap-6">
        <ImagesGrid images={images} isSold={!isAvailable}>
          <FavoriteButton isFavorite={isFavorite} />
          <h1 className="my-6 text-3xl font-bold text-[#1D1E20]">Offers Made</h1>
          <div className="space-y-4">
            {[0, 1, 2].map((_, i) => (
              <div className="flex items-center border-y border-[#CFD9DE] py-6" key={i}>
                <Avatar src={userDisplay.avatar} size={60} alt={`${userDisplay.userName} Avatar`} />
                <div className="ml-4">
                  <p className="font-medium text-[#1D1E20]">
                    <Link href={`/profile/${userDisplay.userName}`}>{userDisplay.userName}</Link>{' '}
                    <span className="font-normal text-[#7C8089]">offered</span> {formatCurrency(offersAmounts[i])}
                  </p>
                  <p className="mt-2 text-[#7C8089]">
                    Offer expires in <span className="text-[#1D1E20]">19 hours</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ImagesGrid>
        <div className="col-span-5">
          <h1 className="text-3xl font-bold text-[#1D1E20]">{title}</h1>
          <div className="mt-4 flex">
            <span className="material-symbols-outlined text-black">{isAvailable ? 'check_circle' : 'cancel'}</span>
            <span className="ml-2 text-[#1D1E20]">{isAvailable ? 'Verified sale' : 'It is not for sale'}</span>
          </div>
          <div className="mt-6 flex items-center">
            <Avatar src={userDisplay.avatar} size={60} alt={`${userDisplay.userName} Avatar`} />
            <div className="ml-4">
              <p className="text-[#7C8089]">{isAvailable ? 'Owner' : 'Buyer'}</p>
              <Link href={`/profile/${userDisplay.userName}`} className="font-medium text-black hover:underline">
                {userDisplay.userName}
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="mb-2 text-xl font-bold text-[#1D1E20]">Size</h1>
            {sizes.map((size) => (
              <div
                key={size}
                className="flex max-w-[68px] items-center justify-center rounded border-2 border-[#CFD9DE] p-4 px-5 font-medium text-[#1D1E20]"
              >
                {size}
              </div>
            ))}
          </div>
          {isAvailable && (
            <MakeOffer>
              <button className="mt-6 flex w-full items-center justify-center rounded bg-black py-4 font-medium text-white">
                Make offer
              </button>
            </MakeOffer>
          )}

          {!isAvailable && (
            <button className="mt-6 flex w-full items-center justify-center rounded bg-black py-4 font-medium text-white">
              Request sales order
              <span className="material-symbols-outlined ml-2 !text-2xl text-white">info</span>
            </button>
          )}

          <div className="mt-6">
            <h1 className="text-xl font-bold text-[#1D1E20]">Product Details</h1>
            <ul className="ml-6 mt-4 list-disc space-y-2 text-[#1D1E20]">
              <li>Made with at least 20% recycled material by weight.</li>
              <li>The design features synthetic materials that reflect mid-'80s basketball shoes.</li>
              <li>
                The padded collar looks and feels exceptional, while perforations at the tip and sides provide elegance
                and breathability.
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h1 className="text-xl font-bold text-[#1D1E20]">More benefits</h1>
            <ul className="ml-6 mt-4 list-disc space-y-2 text-[#1D1E20]">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptatum ipsum modi a hic repellat
                alias expedita, quidem rem dicta distinctio exercitationem. Eveniet dicta ab amet molestias beatae omnis
                est.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptatum ipsum modi a hic repellat
                alias expedita, quidem rem dicta distinctio exercitationem.
              </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quisquam molestias modi ex cupiditate sed
                quae explicabo obcaecati dolorum officiis, dicta accusantium eos atque non, quas, quos nostrum odio
                minus.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

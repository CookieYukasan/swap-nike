import { SneakerProps } from '@/@types'
import { Avatar } from '@/components/Avatar'
import { fetchWrapper } from '@/utils/fetchWrapper'
import formatCurrency from '@/utils/formatCurrency'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AuctionBanner } from './_components/AuctionBanner'
import FavoriteButton from './_components/FavoriteButton'
import ImagesGrid from './_components/ImagesGrid'
import MakeOffer from './_components/MakeOffer'

type MetadataProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getProduct(id: string) {
  try {
    const data = await fetchWrapper<SneakerProps>(`/sneakers/${id}`, {
      method: 'GET',
    })

    if (!data.title) notFound()

    return data
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { id } = params

  const product = await getProduct(id)

  return {
    title: product.title,
    description: `Descrição do produto: ${product.title}`,
    openGraph: {
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const data = await fetchWrapper<SneakerProps[]>('/sneakers', { method: 'GET' })

  return data.map((item) => ({
    id: String(item.id),
  }))
}

export default async function Product({ params: { id } }: { params: { id: string } }) {
  const product = await getProduct(id)

  const userDisplay = product.buyer ? product.buyer : product.author

  return (
    <>
      {product.actionRemainingDate && <AuctionBanner auctionRemainingDate={product.actionRemainingDate} />}
      <main className="container mx-auto mt-8 grid grid-cols-12 gap-6">
        <ImagesGrid images={product.images} isSold={!product.isAvailable}>
          <FavoriteButton isFavorite={product.isFavorite} />
          {product.offers?.length && <h1 className="my-6 text-3xl font-bold text-[#1D1E20]">Offers Made</h1>}
          <div className="space-y-4">
            {product.offers?.map((offer, i) => (
              <div className="flex items-center border-y border-[#CFD9DE] py-6" key={i}>
                <Avatar src={offer.author.avatar} size={60} alt={`${offer.author.userName} Avatar`} />
                <div className="ml-4">
                  <p className="font-medium text-[#1D1E20]">
                    <Link href={`/profile/${offer.author.userName}`}>{offer.author.userName}</Link>{' '}
                    <span className="font-normal text-[#7C8089]">offered</span> {formatCurrency(offer.value)}
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
          <h1 className="text-3xl font-bold text-[#1D1E20]">{product.title}</h1>
          <div className="mt-4 flex">
            <span className="material-symbols-outlined text-black">
              {product.isAvailable ? 'check_circle' : 'cancel'}
            </span>
            <span className="ml-2 text-[#1D1E20]">{product.isAvailable ? 'Verified sale' : 'It is not for sale'}</span>
          </div>
          <div className="mt-6 flex items-center">
            <Avatar src={userDisplay.avatar} size={60} alt={`${userDisplay.userName} Avatar`} />
            <div className="ml-4">
              <p className="text-[#7C8089]">{product.isAvailable ? 'Owner' : 'Buyer'}</p>
              <Link href={`/profile/${userDisplay.userName}`} className="font-medium text-black hover:underline">
                {userDisplay.userName}
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="mb-2 text-xl font-bold text-[#1D1E20]">Size</h1>
            {product.sizes.map((size) => (
              <div
                key={size}
                className="flex max-w-[68px] items-center justify-center rounded border-2 border-[#CFD9DE] p-4 px-5 font-medium text-[#1D1E20]"
              >
                {size}
              </div>
            ))}
          </div>
          {product.soldValue && !product.isAvailable && (
            <div className="mt-6">
              <p className="mb-2 text-[#7C8089]">was sold by</p>
              <p className="text-3xl font-medium text-[#1D1E20]">{formatCurrency(product.soldValue)}</p>
            </div>
          )}

          {product.currentBid && product.isAvailable && (
            <div className="mt-6">
              <p className="mb-2 text-[#7C8089]">Current bid</p>
              <p className="text-3xl font-medium text-[#1D1E20]">{formatCurrency(product.currentBid)}</p>
            </div>
          )}

          {product.isAvailable && (
            <MakeOffer>
              <button className="mt-6 flex w-full items-center justify-center rounded bg-black py-4 font-medium text-white">
                Make offer
              </button>
            </MakeOffer>
          )}

          {!product.isAvailable && (
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

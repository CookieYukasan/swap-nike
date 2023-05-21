import { SneakerProps } from '@/@types'
import { SneakerCard } from '@/components/SneakerCard'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@/components/Tabs'
import { cn } from '@/utils/classNames'
import { EmptyTab } from './EmptyTab'

const tabs = [
  {
    id: 'for-sale',
    label: 'For sale',
    icon: 'storefront',
  },
  {
    id: 'acquired',
    label: 'Acquired',
    icon: 'shopping_bag',
  },
  {
    id: 'favorites',
    label: 'Favorites',
    icon: 'favorite',
  },
]

export function ProfileTabs({ forSale, acquired, favorites }: { [key: string]: SneakerProps[] }) {
  return (
    <TabsRoot defaultValue={tabs[0].id}>
      <TabsList className="space-x-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="group">
            <div
              className={cn(
                'flex items-center justify-between',
                'group-data-[state=active]:border-b-4 group-data-[state=active]:border-black group-data-[state=active]:pb-2',
              )}
            >
              <span className={cn('material-symbols-outlined mr-2 text-black group-data-[state=active]:font-bold')}>
                {tab.icon}
              </span>
              <p className="font-medium group-data-[state=active]:font-bold">{tab.label}</p>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="-mt-[2.3px] h-[1px] w-full bg-[#CFD9DE]"></div>

      <TabsContent value="for-sale" className="grid grid-cols-4 gap-6 data-[state=active]:mt-8">
        {forSale && forSale.length && forSale.map((sneaker) => <SneakerCard key={sneaker.id} data={sneaker} />)}
        {(!forSale || (forSale && !forSale.length)) && <EmptyTab />}
      </TabsContent>

      <TabsContent value="acquired" className="grid grid-cols-4 gap-6 data-[state=active]:mt-8">
        {acquired && acquired.length && acquired.map((sneaker) => <SneakerCard key={sneaker.id} data={sneaker} />)}
        {(!acquired || (acquired && !acquired.length)) && <EmptyTab />}
      </TabsContent>

      <TabsContent value="favorites" className="grid grid-cols-4 gap-6 data-[state=active]:mt-8">
        {favorites && favorites.length && favorites.map((sneaker) => <SneakerCard key={sneaker.id} data={sneaker} />)}
        {(!favorites || (favorites && !favorites.length)) && <EmptyTab />}
      </TabsContent>
    </TabsRoot>
  )
}

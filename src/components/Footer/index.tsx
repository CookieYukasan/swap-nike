import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'Brazil' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
]

const footerCategoriesLinks = [
  {
    title: 'Help',
    links: [
      { label: 'General Questions', href: '/general-questions' },
      { label: 'Deliveries', href: '/deliveries' },
      { label: 'Cookie preferences', href: '/cookie-preferences' },
      { label: 'Products', href: '/products' },
      { label: 'Corporate', href: '/corporate' },
      { label: 'Contact us', href: '/contact-us' },
    ],
  },
  {
    title: 'Lorem ipsum',
    links: [
      { label: 'Link 1', href: '/' },
      { label: 'Link 2', href: '/' },
      { label: 'Link 3', href: '/' },
    ],
  },
]

const socialNetworks = [
  { label: 'Instagram', href: '/' },
  { label: 'Youtube', href: '/' },
  { label: 'Facebook', href: '/' },
]

const paymentsMethods = ['visa', 'mastercard', 'amex', 'elo', 'hipercard', 'discover', 'boleto']

export function Footer() {
  return (
    <footer className="mt-24 w-full bg-[#111]">
      <div className="container mx-auto pb-8 pt-6">
        <div className="flex justify-between">
          <div className="flex space-x-12">
            {footerCategoriesLinks.map((item) => (
              <div key={item.title} className="space-y-4">
                <h1 className="font-medium text-white">{item.title}</h1>

                {item.links.map((link) => (
                  <p className="text-sm text-[#7E7E7E]" key={link.label}>
                    {link.label}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div>
            <Link href="/">
              <Image src="/logo-white.png" className="" alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div>
            <div>
              <h1 className="mb-4 font-medium text-white">Social networks</h1>
              <div className="flex space-x-4">
                {socialNetworks.map((item) => (
                  <Link href={item.href} key={item.label}>
                    <Image
                      src={`/icons/social-media/${item.label.toLowerCase()}.svg`}
                      alt="social networks"
                      width={29}
                      height={29}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h1 className="mb-4 font-medium text-white">Payments methods</h1>
              <div className="grid grid-cols-5 grid-rows-2 gap-2">
                {paymentsMethods.map((item) => (
                  <div key={item} className="flex items-center justify-center rounded bg-white p-2 py-1">
                    <Image src={`/icons/payments-methods/${item}.svg`} alt={`${item}`} width={40} height={40} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 h-[1px] w-full bg-[#3A3A3A]" />
        <div className="mt-8 flex space-x-6">
          {footerLinks.map((link) => (
            <div key={link.label} className="mr-6">
              {link.href && (
                <Link href={link.href} className="text-sm font-medium text-[#7E7E7E]">
                  {link.label}
                </Link>
              )}
              {!link.href && <span className="text-sm font-medium text-[#7E7E7E]">{link.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

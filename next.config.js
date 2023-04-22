/** @type {import('next').NextConfig} */
const fakerDomains = ['loremflickr.com', 'cloudflare-ipfs.com']

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', ...fakerDomains],
  },
}

module.exports = nextConfig

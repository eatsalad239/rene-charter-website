/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Optimize for Vercel deployment
  swcMinify: true,
}

module.exports = nextConfig

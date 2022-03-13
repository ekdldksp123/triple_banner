/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://ekdldksp123.github.io/triple_banner/' : '',
  staticPageGenerationTimeout: 120,
  images: {
    loader: 'akamai',
    path: 'triple_banner',
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig

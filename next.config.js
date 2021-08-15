const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  images: {
    loader: 'cloudinary',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: ['res.cloudinary.com']
  }
}

module.exports = withBundleAnalyzer(nextConfig)

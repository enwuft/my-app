const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = withBundleAnalyzer(nextConfig)

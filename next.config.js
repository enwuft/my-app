const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const withWorkers = require('@zeit/next-workers')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // Disables camera, microphone, and geolocation.
  // `interest-cohort=()` opts the website out of Google's FLoC: https://amifloced.org/
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
]

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: ['res.cloudinary.com']
  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  }
}

module.exports = withPlugins(
  [[withBundleAnalyzer], [withWorkers], [withOffline], [nextConfig]],
  {
    rewrites: async () => {
      return [
        {
          source: '/sw.js',
          destination: '/_next/static/sw.js'
        }
      ]
    }
  }
)

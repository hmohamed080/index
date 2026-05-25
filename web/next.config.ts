import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  ...(process.env.HOSTINGER_STATIC_EXPORT === '1'
    ? {
        output: 'export' as const,
        images: {
          unoptimized: true,
        },
      }
    : {}),
  turbopack: {
    root: path.resolve(__dirname),
  },
}

export default nextConfig

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {},
        },
      ],
    })
    return config
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

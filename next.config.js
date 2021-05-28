module.exports = {
  webpack: (config, _options) => {
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
}

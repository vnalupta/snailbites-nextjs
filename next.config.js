/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
}

module.exports = nextConfig

// module.exports = {
//     target: 'serverless',
//     webpack: function (config) {
//       config.module.rules.push({
//         test: /\.md$/,
//         use: 'raw-loader',
//       })
//       return config
//     },
//   }
/** @type {import('next').NextConfig} */
const nextConfig = {
  use: [
    {
      loader: "svg-url-loader",
      options: {
        limit: 10000,
      },
    },
  ],
};

module.exports = nextConfig;

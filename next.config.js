/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    API_HOST: process.env.API_HOST,
    KEY: process.env.KEY,
    URL_JSON_USERS: process.env.URL_JSON_USERS,
    URL_JSON_POSTS: process.env.URL_JSON_POSTS,
  },
};

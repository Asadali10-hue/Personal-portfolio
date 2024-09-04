/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    space: process.env.CONTENTFULL_SPACE_ID,
    accessToken: process.env.CONTENTFULL_ACCESS_TOKEN

  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
           
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
           
          },
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
           
          },
          {
            protocol: 'https',
            hostname: 'img.youtube.com',
           
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
           
          },
          {
            protocol: 'https',
            hostname: 'aceternity.com',
           
          },
        ],
      },
};

export default nextConfig;

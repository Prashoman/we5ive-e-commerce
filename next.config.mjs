/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co.com',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.prismic.io',
                pathname: '/bpmb/**',
            },
            {
                protocol: 'https',
                hostname: 'images.prismic.io',
                pathname: '/iec/**',
            },
        ],
    },
};

export default nextConfig;
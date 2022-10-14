/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/:all*(jpg|png)',
                locale: false,
                headers: [{
                    key: 'Cache-Control',
                    value: 'public, max-age=15552000 , must-revalidate',
                }],
            },
        ];
    },
};

module.exports = nextConfig;

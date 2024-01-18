/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            port: '',
            pathname: '/**', // This is a wildcard pattern to match all paths in your domain
        },
        ],
        unoptimized: true
    }
}

module.exports = nextConfig

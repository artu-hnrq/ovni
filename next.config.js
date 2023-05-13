/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        domains: ['v5.airtableusercontent.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

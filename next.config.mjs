/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qorcyoboaerodoalqgco.supabase.co',
                port: '',
                pathname: '/**'
            }
        ]
    },
    images: {
        unoptimized: true
    },
};

export default nextConfig;

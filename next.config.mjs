/** @type {import('next').NextConfig} */
const nextConfig = {
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

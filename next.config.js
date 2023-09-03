/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '',
    experimental: {
        appDir: true,
        serverActions: true,
    },
    swcMinify: true,
    images: {
        domains: ["lh3.googleusercontent.com", "vercel.com", "*"],
    },
};

module.exports = nextConfig;

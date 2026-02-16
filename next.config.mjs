/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/BoroBazar',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/BoroBazar',
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/BoroBazar" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

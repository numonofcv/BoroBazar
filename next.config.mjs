const isProd = process.env.NODE_ENV === "production";
const repoName = "/BoroBazar";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? repoName : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : "",
  },
};

export default nextConfig;

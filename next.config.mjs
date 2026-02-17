const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/BoroBazar" : "",
  assetPrefix: isProd ? "/BoroBazar/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/BoroBazar" : "",
  },
};

export default nextConfig;

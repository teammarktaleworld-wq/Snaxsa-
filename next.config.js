/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep Next.js scoped to this app when unrelated lockfiles exist above it.
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

module.exports = nextConfig;

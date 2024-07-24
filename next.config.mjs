/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
};

export default nextConfig;

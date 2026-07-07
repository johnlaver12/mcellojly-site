/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddkaeakoimtrlccigheo.supabase.co",
      },
    ],
  },
};

export default nextConfig;
/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "localhost" },
      { hostname: "yibpwvdelepvsdlvwaia.supabase.co" },
    ],
  },
};

export default nextConfig;

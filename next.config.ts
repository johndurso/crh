import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "le-cdn.hibuwebsites.com",
        pathname: "/e303a05fcbb64691b2d0680657d560f8/**",
      },
    ],
  },
  // Preserve SEO equity from the old hibu URLs.
  async redirects() {
    return [
      { source: "/team", destination: "/about/our-team", permanent: true },
      {
        source: "/national-workers-compensation-defense-network-nwcdn",
        destination: "/national-workers-compensation-defense-network",
        permanent: true,
      },
      { source: "/reviews-1", destination: "/about", permanent: true },
      { source: "/reviews", destination: "/about", permanent: true },
      ...[
        "the-advantage-of-hiring-local-lawyer-service-for-your-workers-comp-case",
        "why-local-lawyers-are-your-best-bet-for-workers-comp-claims",
        "6-ways-lawyer-services-help-you-win-a-workers-compensation-case-faster",
      ].map((slug) => ({ source: `/${slug}`, destination: `/blog/${slug}`, permanent: true })),
    ];
  },
};

export default nextConfig;

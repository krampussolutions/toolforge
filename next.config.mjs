/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/health-calculators",
        destination: "/calculators/health-calculators",
        permanent: true,
      },
      {
        source: "/conversion-tools",
        destination: "/calculators/conversion-tools",
        permanent: true,
      },
      {
        source: "/date-time-tools",
        destination: "/calculators/date-time-tools",
        permanent: true,
      },
      {
        source: "/finance-calculators",
        destination: "/calculators/finance-calculators",
        permanent: true,
      },
      {
        source: "/everyday-tools",
        destination: "/calculators/everyday-tools",
        permanent: true,
      },
      {
        source: "/text-tools",
        destination: "/calculators/text-tools",
        permanent: true,
      },
      {
        source: "/business-tools",
        destination: "/calculators/business-tools",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
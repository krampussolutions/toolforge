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

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
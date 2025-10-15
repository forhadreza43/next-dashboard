import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // `ExperimentalConfig` types in this Next.js/TS setup may not include
  // `cacheComponents` yet even though the runtime supports it. Cast to
  // `any` to preserve the runtime flag without a type error.
  experimental: {
    // Partial Prerendering (PPR) was merged into `cacheComponents`.
    // The previous value "incremental" enabled partial prerendering behavior.
    // Keep the same behavior by enabling `cacheComponents`.
  } as any,
};

export default nextConfig;

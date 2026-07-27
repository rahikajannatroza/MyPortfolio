import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const sentryWebpackPluginOptions = {
  org: "student-cuh",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces
  widenClientFileUpload: true,

  // Transpile SDK to be compatible with IE11
  transpileClientSDK: true,

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Tree-shake Sentry logger statements
  disableLogger: true,

  // Enables automatic Vercel Cron Monitors
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
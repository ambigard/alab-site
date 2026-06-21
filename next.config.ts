import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  // Nextra-powered content (rights pages, templates, future state expansions)
  // lives under src/content and is served at /rights, /templates, etc.
  contentDirBasePath: "/rights",
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextra(nextConfig);

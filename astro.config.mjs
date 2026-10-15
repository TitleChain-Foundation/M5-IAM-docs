// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://titlechain-foundation.github.io",
  base: "/M5-IAM-docs",
  integrations: [
    starlight({
      title: "M5 IAM Docs",
      description: "M5 IAM: the forever-free starting point for every person. Published by TitleChain Foundation.",
      logo: { src: "./src/assets/m5-icon.png", alt: "M5" },
      favicon: "/favicon.png",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/TitleChain-Foundation/M5-IAM-docs" }],
      editLink: { baseUrl: "https://github.com/TitleChain-Foundation/M5-IAM-docs/edit/main/" },
      customCss: ["./src/styles/m5.css"],
      sidebar: [
        { label: "Start free", items: [{ autogenerate: { directory: "start" } }] },
        { label: "Your M5POD", items: [{ autogenerate: { directory: "pod" } }] },
        { label: "Accounts", items: [{ autogenerate: { directory: "accounts" } }] },
        { label: "Certificates and registry", items: [{ autogenerate: { directory: "certificates" } }] },
        { label: "Security", items: [{ autogenerate: { directory: "security" } }] },
        { label: "Standards", items: [{ autogenerate: { directory: "standards" } }] },
        { label: "Developers", items: [{ autogenerate: { directory: "developers" } }] },
        { label: "Brand and rights", items: [{ autogenerate: { directory: "brand" } }] },
        { label: "About", items: [{ autogenerate: { directory: "about" } }] },
      ],
    }),
  ],
});

export type CoreServiceMenuGroup = {
  title: string;
  description: string;
  href: string;
  items: readonly {
    label: string;
    href: string;
  }[];
};

/** The concise service architecture used in the site-wide navigation. */
export const coreServiceMenu: readonly CoreServiceMenuGroup[] = [
  {
    title: "Development",
    description: "Digital products and storefronts built for real business goals.",
    href: "/services/development",
    items: [
      { label: "Web development", href: "/services/development" },
      { label: "Mobile apps", href: "/services/mobile-app-development" },
      { label: "WordPress & WooCommerce", href: "/services/ecommerce-development/wordpress-woocommerce" },
      { label: "E-commerce development", href: "/services/ecommerce-development" },
    ],
  },
  {
    title: "SEO, GMB & AEO",
    description: "Search visibility that helps the right customers find and trust you.",
    href: "/services/gmb-seo-aeo",
    items: [
      { label: "Google Business Profile", href: "/services/gmb-seo-aeo/google-business-profile" },
      { label: "Search engine optimization", href: "/services/gmb-seo-aeo/search-engine-optimization" },
      { label: "Answer engine optimization", href: "/services/gmb-seo-aeo/answer-engine-optimization" },
    ],
  },
  {
    title: "Marketing",
    description: "Campaigns and content designed to turn attention into action.",
    href: "/services/social-media-ppc",
    items: [
      { label: "Social media marketing", href: "/services/social-media-ppc" },
      { label: "Meta & Google Ads", href: "/services/social-media-ppc" },
      { label: "TikTok & Amazon Ads", href: "/services/social-media-ppc" },
      { label: "Social media handling", href: "/services/social-media-ppc/social-media-handling" },
    ],
  },
] as const;

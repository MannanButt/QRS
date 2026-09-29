// src/features/services/data/services.ts
export type ServiceGroup = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imagePosition: string;
  services: readonly string[];
};

export const serviceMenuGroups: readonly ServiceGroup[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    eyebrow: "Intelligent operations",
    description: "AI agents and dependable workflows designed around how your teams actually work.",
    image: "/assets/images/services/menu-ai-automation-robot.png",
    imagePosition: "center center",
    services: [
      "AI Workflow Automation",
      "AI Agents & Copilots",
      "Process Intelligence",
      "Document Intelligence",
      "Governance & Observability",
    ],
  },
  {
    id: "gmb-seo-aeo",
    title: "GMB, SEO & AEO",
    eyebrow: "Search visibility",
    description: "Make your business easier to find, trust, and choose across Google, search results, and answer engines.",
    image: "/assets/images/services/menu-marketing-seo.jpg",
    imagePosition: "center center",
    services: [
      "Google Business Profile",
      "Search Engine Optimization",
      "Answer Engine Optimization",
    ],
  },
  {
    id: "development",
    title: "Web Development",
    eyebrow: "Production engineering",
    description: "Secure digital products, integrations, and platforms engineered for scale.",
    image: "/assets/images/services/menu-development.jpg",
    imagePosition: "center center",
    services: [
      "Web & App Engineering",
      "AI Product Development",
      "API & Systems Integration",
      "Cloud & DevOps",
      "Quality Automation",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "iOS & Android products",
    description: "Useful mobile experiences designed and developed for the way your customers use their phones every day.",
    image: "/assets/images/services/menu-mobile-app-development.png",
    imagePosition: "center center",
    services: [
      "iOS & Android App Development",
      "Flutter & React Native",
      "Mobile App UI/UX",
    ],
  },
  {
    id: "social-media-ppc",
    title: "Social Media Marketing & PPC",
    eyebrow: "Paid & social growth",
    description: "Campaigns, content, and channel management that turn attention into qualified leads and sales.",
    image: "/assets/images/services/menu-social-media-ppc.png",
    imagePosition: "center center",
    services: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "Amazon Ads",
      "Social Media Handling",
    ],
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    eyebrow: "Conversion-ready stores",
    description: "Fast, easy-to-manage online stores built for product discovery, checkout confidence, and growth.",
    image: "/assets/images/services/menu-ecommerce-development.png",
    imagePosition: "center center",
    services: [
      "Shopify Development",
      "WordPress & WooCommerce",
      "Figma & UI/UX",
    ],
  },
] as const;

/**
 * Mapping table of individual service button titles to their dedicated page routes.
 * If a dedicated page route exists, it directs to that page.
 * If no page exists yet, it routes to `/services/not-found` or 404 handler.
 */
export const SERVICE_ITEM_ROUTES: Record<string, string> = {
  // AI Automation sub-services
  "AI Workflow Automation": "/services/ai-automation/ai-workflow-automation",
  "AI Agents & Copilots": "/services/ai-automation/ai-agents-copilots",
  "Process Intelligence": "/services/ai-automation/process-intelligence",
  "Document Intelligence": "/services/ai-automation/document-intelligence",
  "Governance & Observability": "/services/ai-automation/governance-observability",

  // GMB, SEO & AEO sub-services
  "Google Business Profile": "/services/gmb-seo-aeo/google-business-profile",
  "Search Engine Optimization": "/services/gmb-seo-aeo/search-engine-optimization",
  "Answer Engine Optimization": "/services/gmb-seo-aeo/answer-engine-optimization",

  // Development sub-services
  "Web & App Engineering": "/services/development/web-app-engineering",
  "AI Product Development": "/services/development/ai-product-development",
  "API & Systems Integration": "/services/development/api-systems-integration",
  "Cloud & DevOps": "/services/development/cloud-devops",
  "Quality Automation": "/services/development/quality-automation",

  // Mobile application sub-services
  "iOS & Android App Development": "/services/mobile-app-development/ios-android-app-development",
  "Flutter & React Native": "/services/mobile-app-development/flutter-react-native",
  "Mobile App UI/UX": "/services/mobile-app-development/mobile-app-ui-ux",

  // Social media marketing and PPC sub-services
  "Meta Ads": "/services/social-media-ppc/meta-ads",
  "Google Ads": "/services/social-media-ppc/google-ads",
  "TikTok Ads": "/services/social-media-ppc/tiktok-ads",
  "Amazon Ads": "/services/social-media-ppc/amazon-ads",
  "Social Media Handling": "/services/social-media-ppc/social-media-handling",

  // E-commerce development sub-services
  "Shopify Development": "/services/ecommerce-development/shopify-development",
  "WordPress & WooCommerce": "/services/ecommerce-development/wordpress-woocommerce",
  "Figma & UI/UX": "/services/ecommerce-development/figma-ui-ux",

};

/**
 * Returns the exact route for a service item, or falls back to its group hub page or 404
 */
export function getServiceItemHref(serviceName: string, groupId: string): string {
  if (SERVICE_ITEM_ROUTES[serviceName]) {
    return SERVICE_ITEM_ROUTES[serviceName];
  }
  // If no specific route exists yet, send to the group hub page if available
  if (
    groupId === "ai-automation" ||
    groupId === "gmb-seo-aeo" ||
    groupId === "development" ||
    groupId === "mobile-app-development" ||
    groupId === "social-media-ppc" ||
    groupId === "ecommerce-development"
  ) {
    return `/services/${groupId}`;
  }
  return `/services/not-found?service=${encodeURIComponent(serviceName)}`;
}

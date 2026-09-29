import type { ServiceDetail } from "@/src/features/services/types";

type ServiceSeed = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  tools: readonly string[];
};

function buildService(seed: ServiceSeed): ServiceDetail {
  return {
    slug: seed.slug,
    title: seed.title,
    eyebrow: seed.eyebrow,
    headline: `A practical ${seed.title.toLowerCase()} plan built around your growth goals.`,
    description: seed.summary,
    metrics: [
      { value: "Clear", label: "delivery roadmap" },
      { value: "Focused", label: "growth activity" },
      { value: "Monthly", label: "performance visibility" },
    ],
    deliverables: [
      { title: "Strategy & Setup", desc: "A focused plan, account or platform setup, and the priorities needed to move forward with confidence.", iconName: "Target" },
      { title: "Execution & Optimization", desc: "Hands-on delivery with regular refinement based on customer behaviour, campaign signals, and business goals.", iconName: "TrendingUp" },
      { title: "Reporting & Recommendations", desc: "Clear reporting that connects the work to practical next actions for your team.", iconName: "BarChart3" },
      { title: "Team Handover", desc: "Useful documentation and guidance that makes the next phase easier to own and improve.", iconName: "CheckCircle2" },
    ],
    workflowSteps: [
      { step: "01", title: "Discover", desc: "Align on your audience, offer, current position, and the result that matters most." },
      { step: "02", title: "Plan", desc: "Build a focused roadmap with the right platforms, messaging, technical work, and measurement." },
      { step: "03", title: "Launch", desc: "Implement the agreed work carefully, with every important detail checked before it goes live." },
      { step: "04", title: "Improve", desc: "Review meaningful data, refine the approach, and identify the next high-value opportunity." },
    ],
    techStack: seed.tools,
    faq: [
      { question: "How do you decide what to prioritise first?", answer: "We start with the audience, your current performance, and the commercial or operational outcome you need, then focus the first phase on the highest-value work." },
      { question: "Will we be able to see progress clearly?", answer: "Yes. We keep priorities, activity, and meaningful performance signals visible so you always know what is happening and why." },
    ],
  };
}

export const gmbSeoAeoServices = [
  buildService({
    slug: "google-business-profile",
    title: "Google Business Profile (GMB)",
    eyebrow: "Local Search Visibility",
    summary: "Optimize your Google Business Profile so nearby customers can find accurate information, understand your offer, and take action.",
    tools: ["Google Business Profile", "Google Maps", "Review Management", "Local Citations"],
  }),
  buildService({
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    eyebrow: "Organic Search Growth",
    summary: "Technical, content, and on-page SEO improvements that help the right customers discover your business through search.",
    tools: ["Google Search Console", "GA4", "Technical SEO", "Content Planning"],
  }),
  buildService({
    slug: "answer-engine-optimization",
    title: "Answer Engine Optimization (AEO)",
    eyebrow: "AI Search Readiness",
    summary: "Structure your information, authority signals, and content so your business is easier for answer engines and AI search to understand.",
    tools: ["Structured Data", "Entity Mapping", "FAQ Content", "Knowledge Signals"],
  }),
] as const;

export const mobileAppServices = [
  buildService({
    slug: "ios-android-app-development",
    title: "iOS & Android App Development",
    eyebrow: "Native Mobile Products",
    summary: "Plan and build dependable mobile applications that give customers a smooth experience across iOS and Android.",
    tools: ["iOS", "Android", "API Integration", "App Store Connect"],
  }),
  buildService({
    slug: "flutter-react-native",
    title: "Flutter & React Native",
    eyebrow: "Cross-Platform Delivery",
    summary: "Create one high-quality mobile product for both major platforms while keeping development and future updates efficient.",
    tools: ["Flutter", "React Native", "TypeScript", "Firebase"],
  }),
  buildService({
    slug: "mobile-app-ui-ux",
    title: "Mobile App UI/UX",
    eyebrow: "Useful App Experiences",
    summary: "Design mobile journeys, interfaces, and prototypes that make everyday tasks feel intuitive and easy to complete.",
    tools: ["Figma", "User Flows", "Prototyping", "Design Systems"],
  }),
] as const;

export const socialMediaPpcServices = [
  buildService({
    slug: "meta-ads",
    title: "Meta Ads",
    eyebrow: "Facebook & Instagram Ads",
    summary: "Build and optimize Meta campaigns that reach the right audiences with clear creative, offers, and conversion tracking.",
    tools: ["Meta Ads Manager", "Conversions API", "Creative Testing", "Audience Strategy"],
  }),
  buildService({
    slug: "google-ads",
    title: "Google Ads",
    eyebrow: "Intent-Led PPC",
    summary: "Capture high-intent searches and build a measured Google Ads programme that supports efficient lead and sales growth.",
    tools: ["Google Ads", "Keyword Research", "GA4", "Landing Page Optimization"],
  }),
  buildService({
    slug: "tiktok-ads",
    title: "TikTok Ads",
    eyebrow: "Short-Form Reach",
    summary: "Use native-feeling short-form creative and thoughtful audience targeting to reach customers where attention is growing.",
    tools: ["TikTok Ads Manager", "Creative Strategy", "Pixel Setup", "Campaign Testing"],
  }),
  buildService({
    slug: "amazon-ads",
    title: "Amazon Ads",
    eyebrow: "Marketplace Growth",
    summary: "Improve product visibility and sales on Amazon with structured campaigns, listing alignment, and performance optimisation.",
    tools: ["Amazon Ads", "Product Listings", "Search Terms", "Retail Analytics"],
  }),
  buildService({
    slug: "social-media-handling",
    title: "Social Media Handling",
    eyebrow: "Consistent Social Presence",
    summary: "Plan, create, publish, and manage social content that keeps your brand active, useful, and connected to its audience.",
    tools: ["Content Calendars", "Community Management", "Content Creation", "Social Reporting"],
  }),
] as const;

export const ecommerceDevelopmentServices = [
  buildService({
    slug: "shopify-development",
    title: "Shopify Development",
    eyebrow: "Commerce Storefronts",
    summary: "Launch or improve a fast Shopify storefront that helps customers browse, trust, and buy with confidence.",
    tools: ["Shopify", "Shopify Themes", "Store Apps", "Checkout Optimization"],
  }),
  buildService({
    slug: "wordpress-woocommerce",
    title: "WordPress & WooCommerce",
    eyebrow: "Flexible E-Commerce",
    summary: "Create an easy-to-manage WordPress and WooCommerce store tailored to your products, customers, and operations.",
    tools: ["WordPress", "WooCommerce", "Payment Gateways", "Product Management"],
  }),
  buildService({
    slug: "figma-ui-ux",
    title: "Figma & UI/UX",
    eyebrow: "Commerce Experience Design",
    summary: "Design clear product discovery, cart, and checkout journeys in Figma before development begins.",
    tools: ["Figma", "Wireframes", "Product UX", "Responsive UI"],
  }),
] as const;

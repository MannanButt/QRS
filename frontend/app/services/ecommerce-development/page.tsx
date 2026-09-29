import type { Metadata } from "next";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { ecommerceDevelopmentServices } from "@/src/features/services/data/recampServiceData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "E-Commerce Development",
  description: "Shopify, WordPress, WooCommerce, Figma, and UI/UX e-commerce development services.",
};

const config: HubPageConfig = {
  title: "E-Commerce Development",
  eyebrow: "Conversion-Ready Commerce",
  heading: "Online stores built to make buying easier.",
  description: "We create high-performing storefronts and commerce experiences around the products, operations, and customers that make your business unique.",
  groupSlug: "ecommerce-development",
  services: ecommerceDevelopmentServices,
  icons: {},
  ctaHeading: "Planning a new or improved online store?",
  ctaDescription: "Start with the platform, user experience, or store operation that will make checkout and growth easier.",
  ctaButtonText: "Schedule Meeting",
};

export default function EcommerceDevelopmentHubPage() {
  return <ServiceHubView config={config} />;
}

import type { Metadata } from "next";
import { Brain, CheckCircle2, Cloud, Globe, Share2 } from "lucide-react";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { webDevServices } from "@/src/features/services/data/webDevelopmentData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "Development Services",
  description: "Secure digital products, integrations, and platforms engineered for scale.",
};

const config: HubPageConfig = {
  title: "Development Services",
  eyebrow: "Production Engineering",
  heading: "Development Services Built for Scale",
  description: "Secure digital products, integrations, and platforms engineered for performance, maintainability, and reliability.",
  groupSlug: "development",
  services: webDevServices,
  icons: {
    "web-app-engineering": Globe,
    "ai-product-development": Brain,
    "api-systems-integration": Share2,
    "cloud-devops": Cloud,
    "quality-automation": CheckCircle2,
  },
  ctaHeading: "Scale Your Digital Products",
  ctaDescription: "Build secure, performant, and maintainable applications with QRS development specialists.",
  ctaButtonText: "Start a Conversation",
};

export default function DevelopmentHubPage() {
  return <ServiceHubView config={config} />;
}

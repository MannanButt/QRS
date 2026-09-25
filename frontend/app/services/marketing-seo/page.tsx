import type { Metadata } from "next";
import { BarChart3, Cpu, Mail, Search, Target } from "lucide-react";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { marketingSeoSubServices } from "@/src/features/services/data/marketingSeoData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "Marketing & SEO Services",
  description: "Connected search, content, performance marketing, and lifecycle systems designed for sustainable growth.",
};

const config: HubPageConfig = {
  title: "Marketing & SEO Services",
  eyebrow: "Measurable Growth",
  heading: "Marketing & SEO Systems Designed for Growth",
  description: "Connected technical search, content, paid media, and customer lifecycle systems built around your goals.",
  groupSlug: "marketing-seo",
  services: Object.values(marketingSeoSubServices),
  icons: {
    "technical-seo": Search,
    "ai-content-systems": Cpu,
    "performance-marketing": Target,
    "crm-lifecycle-automation": Mail,
    "analytics-attribution": BarChart3,
  },
  ctaHeading: "Build Sustainable Marketing Growth",
  ctaDescription: "Get a technical SEO audit, content roadmap, or performance marketing plan tailored to your business.",
  ctaButtonText: "Start a Conversation",
};

export default function MarketingSeoHubPage() {
  return <ServiceHubView config={config} />;
}

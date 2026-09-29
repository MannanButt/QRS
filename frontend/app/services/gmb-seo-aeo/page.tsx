import type { Metadata } from "next";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { gmbSeoAeoServices } from "@/src/features/services/data/recampServiceData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "GMB, SEO & AEO Services",
  description: "Google Business Profile, SEO, and answer engine optimization services that improve search visibility.",
};

const config: HubPageConfig = {
  title: "GMB, SEO & AEO Services",
  eyebrow: "Search Visibility",
  heading: "Be easier to find, trust, and choose.",
  description: "Build a stronger local and organic presence with Google Business Profile, SEO, and answer-engine ready content.",
  groupSlug: "gmb-seo-aeo",
  services: gmbSeoAeoServices,
  icons: {},
  ctaHeading: "Ready to improve your search presence?",
  ctaDescription: "Start with the search, local visibility, or answer-engine opportunity that will make the biggest difference.",
  ctaButtonText: "Schedule Meeting",
};

export default function GmbSeoAeoHubPage() {
  return <ServiceHubView config={config} />;
}

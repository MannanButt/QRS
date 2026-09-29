import type { Metadata } from "next";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { socialMediaPpcServices } from "@/src/features/services/data/recampServiceData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "Social Media Marketing & PPC",
  description: "Meta, Google, TikTok, Amazon Ads, and social media handling services.",
};

const config: HubPageConfig = {
  title: "Social Media Marketing & PPC",
  eyebrow: "Paid & Social Growth",
  heading: "Turn attention into action across paid and social channels.",
  description: "Use platform-native creative, well-managed campaigns, and clear reporting to turn social attention into meaningful business growth.",
  groupSlug: "social-media-ppc",
  services: socialMediaPpcServices,
  icons: {},
  ctaHeading: "Ready to make your media budget work harder?",
  ctaDescription: "Choose the channel, campaign, or social presence that needs the most attention first.",
  ctaButtonText: "Schedule Meeting",
};

export default function SocialMediaPpcHubPage() {
  return <ServiceHubView config={config} />;
}

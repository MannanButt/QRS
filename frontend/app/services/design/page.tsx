import type { Metadata } from "next";
import { Compass, Layers, Palette, Target, Zap } from "lucide-react";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { designServices } from "@/src/features/services/data/designData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "Design Services",
  description: "Research-led experiences and design systems that make complex products feel simple.",
};

const config: HubPageConfig = {
  title: "Design Services",
  eyebrow: "Human-Centred Systems",
  heading: "Design Services Built for Clarity",
  description: "Research-led experiences and design systems that make complex digital products feel simple, intuitive, and ready to use.",
  groupSlug: "design",
  services: designServices,
  icons: {
    "product-strategy": Compass,
    "ux-ui-design": Palette,
    "design-systems": Layers,
    "rapid-prototyping": Zap,
    "conversion-experience-design": Target,
  },
  ctaHeading: "Elevate Your Product Experience",
  ctaDescription: "Turn complex digital workflows into clear, useful experiences for the people who rely on them.",
  ctaButtonText: "Start a Conversation",
};

export default function DesignHubPage() {
  return <ServiceHubView config={config} />;
}

import type { Metadata } from "next";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { mobileAppServices } from "@/src/features/services/data/recampServiceData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description: "iOS, Android, Flutter, React Native, and mobile app UI/UX services.",
};

const config: HubPageConfig = {
  title: "Mobile App Development",
  eyebrow: "iOS & Android Products",
  heading: "Mobile apps that feel useful from the first tap.",
  description: "From a clear app experience to dependable iOS and Android delivery, we build mobile products around real customer needs.",
  groupSlug: "mobile-app-development",
  services: mobileAppServices,
  icons: {},
  ctaHeading: "Have a mobile product in mind?",
  ctaDescription: "Talk with QRS about the right app scope, technology, and path to launch.",
  ctaButtonText: "Schedule Meeting",
};

export default function MobileAppDevelopmentHubPage() {
  return <ServiceHubView config={config} />;
}

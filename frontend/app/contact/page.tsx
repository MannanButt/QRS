import type { Metadata } from "next";
import ContactPage from "@/src/features/contact/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact QRS Technologies in Lahore to discuss development, SEO, AEO, marketing, or your next digital project.",
};

export default function ContactRoute() {
  return <ContactPage />;
}

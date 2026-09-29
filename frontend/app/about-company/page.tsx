import type { Metadata } from "next";
import { AboutCompanyPage } from "@/src/features/company/components/CompanyPage";

export const metadata: Metadata = {
  title: "About Company",
  description: "Learn how QRS Technologies helps businesses plan, build, automate, and grow with practical digital solutions.",
};

export default function AboutCompanyRoute() {
  return <AboutCompanyPage />;
}

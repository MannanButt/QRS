import type { Metadata } from "next";
import { BlogsPage } from "@/src/features/company/components/CompanyPage";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Practical QRS Technologies insights on digital products, search, e-commerce, automation, and growth.",
};

export default function BlogsRoute() {
  return <BlogsPage />;
}

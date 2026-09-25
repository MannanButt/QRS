import type { Metadata } from "next";
import BookDemoPage from "@/src/features/contact/components/BookDemoPage";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Tell QRS Technologies what you are building, improving, or automating.",
};

export default function BookADemoRoute() {
  return <BookDemoPage />;
}

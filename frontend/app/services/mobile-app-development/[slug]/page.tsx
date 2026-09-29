import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/src/features/services/components/ServiceDetailView";
import { mobileAppServices } from "@/src/features/services/data/recampServiceData";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return mobileAppServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = mobileAppServices.find((service) => service.slug === slug);
  return detail ? { title: detail.title, description: detail.description } : {};
}

export default async function MobileAppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = mobileAppServices.find((service) => service.slug === slug);
  if (!detail) notFound();
  return <ServiceDetailView detail={detail} heroImage="/assets/images/services/menu-mobile-app-development.png" />;
}

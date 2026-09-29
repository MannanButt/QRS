import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/src/features/services/components/ServiceDetailView";
import { gmbSeoAeoServices } from "@/src/features/services/data/recampServiceData";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return gmbSeoAeoServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = gmbSeoAeoServices.find((service) => service.slug === slug);
  return detail ? { title: detail.title, description: detail.description } : {};
}

export default async function GmbSeoAeoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = gmbSeoAeoServices.find((service) => service.slug === slug);
  if (!detail) notFound();
  return <ServiceDetailView detail={detail} heroImage="/assets/images/services/menu-marketing-seo.jpg" />;
}

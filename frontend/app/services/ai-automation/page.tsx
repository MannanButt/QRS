import type { Metadata } from "next";
import { BarChart3, Brain, FileText, ShieldCheck, Zap } from "lucide-react";
import { ServiceHubView } from "@/src/features/services/components/ServiceHubView";
import { aiAutomationServices } from "@/src/features/services/data/aiAutomationData";
import type { HubPageConfig } from "@/src/features/services/types";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description: "AI agents and dependable workflows designed around how your teams actually work.",
};

const config: HubPageConfig = {
  title: "AI Automation Services",
  eyebrow: "Intelligent Operations",
  heading: "AI Automation Built Around Your Operations",
  description: "From a single bottlenecked workflow to connected automation, we shape practical systems around your real operational work.",
  groupSlug: "ai-automation",
  services: aiAutomationServices,
  icons: {
    "ai-workflow-automation": Zap,
    "ai-agents-copilots": Brain,
    "process-intelligence": BarChart3,
    "document-intelligence": FileText,
    "governance-observability": ShieldCheck,
  },
  ctaHeading: "Make Operations Work Smarter",
  ctaDescription: "Work with QRS to design dependable workflows and AI systems that serve your team's goals.",
  ctaButtonText: "Map Your Workflow",
};

export default function AIAutomationHubPage() {
  return <ServiceHubView config={config} />;
}

import { FiBriefcase, FiAperture, FiBarChart2, FiShield } from "react-icons/fi";

export interface WhyChooseItem {
  id: string;
  icon: any;
  title: string;
  description: string;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: "unified",
    icon: FiBriefcase,
    title: "Unified Business Lifecycle",
    description:
      "Connect projects, finance, and HR in one ecosystem. No silos. No disconnected tools. Just complete visibility from planning to payroll.",
  },
  {
    id: "purpose",
    icon: FiAperture,
    title: "Purpose-Built Business OS",
    description:
      "Designed as one integrated architecture — not stitched modules. Shared data, real-time insights, and cross-functional intelligence in a single platform.",
  },
  {
    id: "scalable",
    icon: FiBarChart2,
    title: "Scalable & Transparent Platform",
    description:
      "From 20 to 2,000 employees — Zithspace grows with your structure. Unified pricing, all core capabilities included, zero hidden add-ons.",
  },
  {
    id: "enterprise",
    icon: FiShield,
    title: "Enterprise-Ready Governance",
    description:
      "Structured for control and compliance.RBAC, approval workflows, hierarchy mapping, and audit-ready tracking built for scale.",
  },
];

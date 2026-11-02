import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Audit Readiness",
  description:
    "Walk into your audit with documentation already in place. Audit schedules, control documentation and auditor request management.",
  openGraph: {
    title: "Audit Readiness | DreX",
    description: "Walk into your audit with documentation already in place.",
  },
};

export default function AuditReadinessPage() {
  return <ServicePage service={services["audit-readiness"]} />;
}

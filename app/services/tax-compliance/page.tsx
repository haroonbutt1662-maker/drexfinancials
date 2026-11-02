import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Tax and Compliance",
  description:
    "Prepared by our team, filed by licensed partner CPAs. Business and personal tax returns, estimated taxes and year-end compliance.",
  openGraph: {
    title: "Tax and Compliance | DreX",
    description: "Prepared by our team, filed by licensed partner CPAs.",
  },
};

export default function TaxCompliancePage() {
  return <ServicePage service={services["tax-compliance"]} />;
}

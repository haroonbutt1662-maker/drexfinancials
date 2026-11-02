import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Financial Packages",
  description:
    "A fixed scope, a fixed price, a fixed timeframe. Books Health Check, 13-Week Cash Flow Build, Investor Model Build and Transaction Readiness Review.",
  openGraph: {
    title: "Financial Packages | DreX",
    description: "A fixed scope, a fixed price, a fixed timeframe.",
  },
};

export default function FinancialPackagesPage() {
  return <ServicePage service={services["financial-packages"]} />;
}

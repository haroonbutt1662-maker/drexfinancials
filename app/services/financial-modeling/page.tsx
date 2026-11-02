import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Financial Modeling and FP&A",
  description:
    "Models that hold up under investor and lender scrutiny. Three-statement models, scenario analysis, valuations and cash flow forecasts.",
  openGraph: {
    title: "Financial Modeling and FP&A | DreX",
    description: "Models that hold up under investor and lender scrutiny.",
  },
};

export default function FinancialModelingPage() {
  return <ServicePage service={services["financial-modeling"]} />;
}

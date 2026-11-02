import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Fractional CFO",
  description:
    "Senior financial leadership, without the full-time salary. Board-ready reporting, forecasting, cash management and fundraising support from DreX.",
  openGraph: {
    title: "Fractional CFO | DreX",
    description: "Senior financial leadership, without the full-time salary.",
  },
};

export default function FractionalCFOPage() {
  return <ServicePage service={services["fractional-cfo"]} />;
}

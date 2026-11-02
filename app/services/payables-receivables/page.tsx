import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Payables and Receivables",
  description:
    "Cash comes in faster and goes out on time. Invoice intake, approval routing, collections and cash application for growing businesses.",
  openGraph: {
    title: "Payables and Receivables | DreX",
    description: "Cash comes in faster and goes out on time.",
  },
};

export default function PayablesReceivablesPage() {
  return <ServicePage service={services["payables-receivables"]} />;
}

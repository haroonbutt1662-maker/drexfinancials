import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Transaction Readiness",
  description:
    "Clean books and an organized data room before buyers ask. Proof of cash, normalized earnings and data room build for sales, raises and refinancings.",
  openGraph: {
    title: "Transaction Readiness | DreX",
    description: "Clean books and an organized data room before buyers ask.",
  },
};

export default function TransactionReadinessPage() {
  return <ServicePage service={services["transaction-readiness"]} />;
}

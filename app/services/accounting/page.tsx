import type { Metadata } from "next";
import { services } from "@/app/content/services";
import ServicePage from "@/app/components/ServicePage";

export const metadata: Metadata = {
  title: "Accounting and Monthly Close",
  description:
    "Books closed on time, every month, with every number traced to source. Month-end close, management accounts, cleanup and system conversions.",
  openGraph: {
    title: "Accounting and Monthly Close | DreX",
    description: "Books closed on time, every month, with every number traced to source.",
  },
};

export default function AccountingPage() {
  return <ServicePage service={services["accounting"]} />;
}

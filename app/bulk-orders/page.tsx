// import { Metadata } from "next";
// import PageHero from "@/components/ui/PageHero";
// import GiftBox from "@/components/ui/GiftBox";
// import Categories from "@/components/bulk-orders/Categories";
// import EnquiryForm from "@/components/bulk-orders/EnquiryForm";

// export const metadata: Metadata = {
//   title: "Bulk Orders | Snax सा",
//   description: "Corporate gifting, wedding favours, event snacking and festive gift boxes — bulk makhana orders from Snax सा.",
// };

// export default function BulkOrdersPage() {
//   return (
//     <main className="relative">
//       <PageHero
//         eyebrow="Bulk Orders"
//         title="Gifting That"
//         highlight="Feels Royal"
//         description="From boardrooms to baraats — custom-branded, bulk-packed roasted makhana for every occasion."
//         pillLabel="CUSTOM BRANDING AVAILABLE"
//         illustration={<GiftBox />}
//         variant="coral"
//       />
//       <Categories />
//       <EnquiryForm />
//     </main>
//   );
// }














// app/bulk-orders/page.tsx
import { Metadata } from "next";
import BulkHero from "@/components/bulk-orders/Bulkhero";
import BulkStats from "@/components/bulk-orders/BulkStats";
import Categories from "@/components/bulk-orders/Categories";
import HowItWorks from "@/components/bulk-orders/Howitworks";
import BulkTestimonials from "@/components/bulk-orders/Bulktestimonials";
import EnquiryForm from "@/components/bulk-orders/EnquiryForm";

export const metadata: Metadata = {
  title: "Bulk Orders | Snax सा",
  description:
    "Corporate gifting, wedding favours, event snacking and festive gift boxes — bulk makhana orders from Snax सा.",
};

export default function BulkOrdersPage() {
  return (
    <main className="relative">
      <BulkHero />
      <BulkStats />
      <Categories />
      <HowItWorks />
      <BulkTestimonials />
      <EnquiryForm />
    </main>
  );
}
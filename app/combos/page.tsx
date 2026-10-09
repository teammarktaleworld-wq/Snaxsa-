import type { Metadata } from "next";
import ComboPageContent from "@/components/combos/ComboPageContent";

export const metadata: Metadata = {
  title: "Makhana Combo Boxes | Snax सा",
  description: "Discover Snax सा Signature, Grand and Discovery makhana combo boxes, or build a flavour combo of your own.",
};

export default function CombosPage() {
  return <ComboPageContent />;
}

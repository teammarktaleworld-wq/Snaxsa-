import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/flavours/ProductDetail";
import { flavours } from "@/data/flavours";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return flavours.map((flavour) => ({ slug: flavour.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const flavour = flavours.find((item) => item.id === slug);
  if (!flavour) return { title: "Flavour not found | Snax सा" };
  return {
    title: `${flavour.name} Roasted Makhana`,
    description: flavour.description,
    openGraph: { title: `${flavour.name} | Snax सा`, description: flavour.description, images: [flavour.image] },
  };
}

export default async function FlavourProductPage({ params }: Props) {
  const { slug } = await params;
  const flavour = flavours.find((item) => item.id === slug);
  if (!flavour) notFound();
  return <ProductDetail flavour={flavour} />;
}

export interface BrandValue {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const brandValues: BrandValue[] = [
  { id: "heritage", label: "Rajasthani Heritage", description: "Rooted in the royal food culture of Jaipur", icon: "Crown" },
  { id: "purity", label: "Purity First", description: "No preservatives, no shortcuts, ever", icon: "Leaf" },
  { id: "craft", label: "Small-Batch Craft", description: "Roasted fresh in limited daily batches", icon: "Flame" },
  { id: "community", label: "Community Love", description: "Built with feedback from 4,000+ families", icon: "Heart" },
];

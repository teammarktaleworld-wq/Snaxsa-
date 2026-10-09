export interface ProcessStep {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  { id: "farm", label: "Farm", description: "Makhana sourced from trusted lotus farms in North India", icon: "Sprout" },
  { id: "cleaning", label: "Cleaning", description: "Every batch hand-sorted and cleaned for quality", icon: "Droplets" },
  { id: "roasting", label: "Roasting", description: "Slow-roasted in small batches, never fried", icon: "Flame" },
  { id: "seasoning", label: "Seasoning", description: "Tossed in our signature Rajasthani spice blends", icon: "Sparkles" },
  { id: "packing", label: "Packing", description: "Sealed fresh in air-tight jars to lock in the crunch", icon: "Package" },
  { id: "delivery", label: "Delivery", description: "Delivered to your door across Jaipur, fresh and fast", icon: "Truck" },
];

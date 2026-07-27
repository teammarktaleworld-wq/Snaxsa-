export interface Flavour {
  id: string;
  name: string;
  tagline: string;
  image: string;
  colorFrom: string;
  colorTo: string;
  badge?: string;
  description: string;
  ingredients: string[];
  price: number;
  weight: string;
  protein: string;
  shelfLife: string;
  amazonUrl?: string;
}

export interface WhySnaxPoint {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface WayToEnjoy {
  id: string;
  label: string;
  icon: string;
}

export interface FeatureStripItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  bg: string;
}

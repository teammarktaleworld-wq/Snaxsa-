export interface NutritionStat {
  id: string;
  label: string;
  value: string;
  percent: number;
  color: string;
}

export const nutritionStats: NutritionStat[] = [
  { id: "protein", label: "High Protein", value: "9.7g", percent: 80, color: "#E91E63" },
  { id: "fat", label: "Low Fat", value: "0.1g", percent: 15, color: "#4B0D20" },
  { id: "gluten", label: "Gluten Free", value: "0g", percent: 100, color: "#F9A825" },
  { id: "fibre", label: "Rich Fibre", value: "14g", percent: 70, color: "#6B102E" },
  { id: "calcium", label: "Calcium", value: "60mg", percent: 55, color: "#FF4F81" },
];

export const comparisonRows = [
  { label: "Roasted, not fried", makhana: true, chips: false },
  { label: "High in protein", makhana: true, chips: false },
  { label: "Gluten free", makhana: true, chips: true },
  { label: "Low in saturated fat", makhana: true, chips: false },
  { label: "No trans fat", makhana: true, chips: false },
  { label: "No preservatives", makhana: true, chips: false },
];

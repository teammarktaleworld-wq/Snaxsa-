export interface BulkCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  minOrder: string;
}

export const bulkCategories: BulkCategory[] = [
  { id: "corporate", label: "Corporate Gifting", description: "Branded jars and hampers for your team or clients", icon: "Briefcase", minOrder: "50 jars" },
  { id: "wedding", label: "Wedding Favours", description: "Elegant return-gift boxes for your big day", icon: "Heart", minOrder: "100 jars" },
  { id: "events", label: "Events & Conferences", description: "Fresh, healthy snacking for attendees", icon: "CalendarDays", minOrder: "75 jars" },
  { id: "giftbox", label: "Festive Gift Boxes", description: "Curated multi-flavour boxes for festivals", icon: "Gift", minOrder: "25 boxes" },
];

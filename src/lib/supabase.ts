import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type DirectoryCategory =
  | "sports"
  | "music"
  | "summer_programs"
  | "stem_tech"
  | "special_needs"
  | "gifted_enrichment"
  | "el_support";

export const CATEGORY_LABELS: Record<DirectoryCategory, string> = {
  sports: "Sports",
  music: "Music Lessons & Programs",
  summer_programs: "Summer Programs",
  stem_tech: "STEM & Technology",
  special_needs: "Special Needs Services",
  gifted_enrichment: "Gifted Programs & Enrichment",
  el_support: "English Learner Support",
};

export type CostType = "free" | "sliding_scale" | "paid";

export const COST_LABELS: Record<CostType, string> = {
  free: "Free",
  sliding_scale: "Sliding Scale",
  paid: "Paid",
};

export interface DirectoryEntry {
  id: string;
  name: string;
  category: DirectoryCategory;
  description: string;
  cost_type: CostType;
  cost_details: string | null;
  address: string | null;
  city: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  age_range: string | null;
  status: "pending" | "approved" | "rejected";
  submitted_by_name: string | null;
  submitted_by_email: string | null;
  admin_notes: string | null;
  created_at: string;
  approved_at: string | null;
}

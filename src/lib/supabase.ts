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

export type VideoCategory =
  | "animated_explainer"
  | "parent_testimonial"
  | "school_tour"
  | "how_to";

export const VIDEO_CATEGORY_LABELS: Record<VideoCategory, string> = {
  animated_explainer: "Animated Explainer",
  parent_testimonial: "Parent Testimonial",
  school_tour: "Day in the Life / School Tour",
  how_to: "How-To Video",
};

export interface VideoEntry {
  id: string;
  title: string;
  category: VideoCategory;
  description: string;
  video_url: string;
  related_topic: string | null;
  status: "pending" | "approved" | "rejected";
  submitted_by_name: string | null;
  submitted_by_email: string | null;
  admin_notes: string | null;
  created_at: string;
  approved_at: string | null;
}

// Extracts a YouTube or Vimeo embeddable URL from a regular share link.
// Returns null if the URL isn't recognized, so the UI can fall back to a
// plain link instead of trying to embed something that won't work.
export function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1);
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    return null;
  } catch {
    return null;
  }
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  supabase,
  type VideoEntry,
  type VideoCategory,
  VIDEO_CATEGORY_LABELS,
  getEmbedUrl,
} from "@/lib/supabase";

const CATEGORIES: (VideoCategory | "all")[] = [
  "all",
  "animated_explainer",
  "parent_testimonial",
  "school_tour",
  "how_to",
];

export default function VideoLibraryPage() {
  const [videos, setVideos] = useState<VideoEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<VideoCategory | "all">("all");

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("video_entries")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });
      if (error) {
        setError(error.message);
      } else {
        setVideos(data ?? []);
      }
      setLoading(false);
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    if (category === "all") return videos;
    return videos.filter((v) => v.category === category);
  }, [videos, category]);

  return (
    <div className="bg-[#0d1b2a] text-[#f4f1ea] min-h-screen">
      <div className="bg-[#c9a13b] text-[#0d1b2a] text-sm text-center py-2 px-4 font-medium">
        🔊 Amplify Justice Liberation Project — Free advocacy resources for Louisiana parents
      </div>

      <header className="border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold text-lg tracking-tight">
            ALAB <span className="opacity-60 font-normal">Advocates Louisiana &amp; Beyond</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/rights" className="hover:opacity-80">Know Your Rights</Link>
            <Link href="/directory" className="hover:opacity-80">Directory</Link>
            <Link href="/videos" className="hover:opacity-80">Videos</Link>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-sm text-[#f4f1ea]/60 mb-2">
          <Link href="/" className="hover:underline">Home</Link> › Video Library
        </p>
        <p className="text-[#c9a13b] font-semibold text-sm uppercase tracking-wide mb-2">
          🎬 Video Library
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          See It Explained
        </h1>
        <p className="text-[#f4f1ea]/80 mb-8 max-w-2xl">
          Animated explainers for complex topics like IEPs and McKinney-Vento,
          real parent testimonials, school tours, and how-to videos — all
          reviewed before they're listed here.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2 flex-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === c
                    ? "bg-[#c9a13b] text-[#0d1b2a]"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {c === "all" ? "All Videos" : VIDEO_CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
          <Link
            href="/videos/submit"
            className="rounded-xl bg-[#c9a13b] text-[#0d1b2a] px-5 py-3 font-semibold text-center hover:bg-[#dcb653] transition whitespace-nowrap"
          >
            + Submit a Video
          </Link>
        </div>

        {loading && <p className="text-[#f4f1ea]/60">Loading videos...</p>}

        {error && (
          <p className="text-red-300">
            Something went wrong loading the video library: {error}
          </p>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-lg font-semibold mb-2">No videos yet</p>
            <p className="text-[#f4f1ea]/70 mb-4">
              {videos.length === 0
                ? "This library is just getting started. Have a helpful video to share? Be the first to add it."
                : "Try a different category."}
            </p>
            <Link
              href="/videos/submit"
              className="inline-block rounded-full bg-[#c9a13b] text-[#0d1b2a] px-5 py-2 font-semibold hover:bg-[#dcb653] transition"
            >
              Submit a Video
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => {
            const embedUrl = getEmbedUrl(video.video_url);
            return (
              <div
                key={video.id}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col"
              >
                {embedUrl ? (
                  <div className="aspect-video bg-black">
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a
                    href={video.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-video bg-black/40 flex items-center justify-center text-[#c9a13b] hover:bg-black/60 transition"
                  >
                    ▶ Watch video →
                  </a>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block rounded-full bg-[#c9a13b]/20 text-[#c9a13b] text-xs font-medium px-3 py-1 mb-2 w-fit">
                    {VIDEO_CATEGORY_LABELS[video.category]}
                  </span>
                  <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                  <p className="text-sm text-[#f4f1ea]/80 flex-1">
                    {video.description}
                  </p>
                  {video.related_topic && (
                    <p className="text-xs text-[#f4f1ea]/50 mt-2">
                      Related: {video.related_topic}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

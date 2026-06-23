"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  supabase,
  type DirectoryEntry,
  type DirectoryCategory,
  CATEGORY_LABELS,
  COST_LABELS,
} from "@/lib/supabase";

const CATEGORIES: (DirectoryCategory | "all")[] = [
  "all",
  "sports",
  "music",
  "summer_programs",
  "stem_tech",
  "special_needs",
  "gifted_enrichment",
  "el_support",
];

export default function DirectoryPage() {
  const [entries, setEntries] = useState<DirectoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DirectoryCategory | "all">("all");

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("directory_entries")
        .select("*")
        .eq("status", "approved")
        .order("name");
      if (error) {
        setError(error.message);
      } else {
        setEntries(data ?? []);
      }
      setLoading(false);
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      const matchesCategory = category === "all" || e.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        e.name.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.city ?? "").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [entries, query, category]);

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
            <Link href="/templates" className="hover:opacity-80">Templates</Link>
            <Link href="/directory" className="hover:opacity-80">Directory</Link>
          </div>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-sm text-[#f4f1ea]/60 mb-2">
          <Link href="/" className="hover:underline">Home</Link> › Programs &amp; Resources Directory
        </p>
        <p className="text-[#c9a13b] font-semibold text-sm uppercase tracking-wide mb-2">
          📚 Programs &amp; Resources Directory
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find Programs for Your Child
        </h1>
        <p className="text-[#f4f1ea]/80 mb-8 max-w-2xl">
          Community-submitted sports, music, summer programs, STEM
          opportunities, special needs services, gifted enrichment, and
          English learner support — all reviewed before they're listed
          here.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, description, or city..."
            className="flex-1 rounded-xl bg-white text-[#0d1b2a] px-4 py-3 placeholder:text-[#0d1b2a]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a13b]"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as DirectoryCategory | "all")}
            className="rounded-xl bg-white text-[#0d1b2a] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a13b]"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.filter((c) => c !== "all").map((c) => (
              <option key={c} value={c}>
                {CATEGORY_LABELS[c as DirectoryCategory]}
              </option>
            ))}
          </select>
          <Link
            href="/directory/submit"
            className="rounded-xl bg-[#c9a13b] text-[#0d1b2a] px-5 py-3 font-semibold text-center hover:bg-[#dcb653] transition whitespace-nowrap"
          >
            + Submit a Resource
          </Link>
        </div>

        {loading && (
          <p className="text-[#f4f1ea]/60">Loading programs and resources...</p>
        )}

        {error && (
          <p className="text-red-300">
            Something went wrong loading the directory: {error}
          </p>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-lg font-semibold mb-2">No matches yet</p>
            <p className="text-[#f4f1ea]/70 mb-4">
              {entries.length === 0
                ? "This directory is just getting started. Know a great program? Be the first to add it."
                : "Try a different search term or category."}
            </p>
            <Link
              href="/directory/submit"
              className="inline-block rounded-full bg-[#c9a13b] text-[#0d1b2a] px-5 py-2 font-semibold hover:bg-[#dcb653] transition"
            >
              Submit a Resource
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <span className="inline-block rounded-full bg-[#c9a13b]/20 text-[#c9a13b] text-xs font-medium px-3 py-1 mb-3 w-fit">
                {CATEGORY_LABELS[entry.category]}
              </span>
              <h3 className="font-bold text-lg mb-1">{entry.name}</h3>
              {entry.age_range && (
                <p className="text-xs text-[#f4f1ea]/60 mb-2">
                  Ages: {entry.age_range}
                </p>
              )}
              <p className="text-sm text-[#f4f1ea]/80 flex-1 mb-3">
                {entry.description}
              </p>
              <div className="text-sm space-y-1 mb-3">
                <p>
                  <span className="font-semibold">Cost:</span>{" "}
                  {COST_LABELS[entry.cost_type]}
                  {entry.cost_details ? ` — ${entry.cost_details}` : ""}
                </p>
                {entry.city && (
                  <p>
                    <span className="font-semibold">Location:</span> {entry.city}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                {entry.website && (
                  <a
                    href={entry.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9a13b] hover:underline"
                  >
                    Website →
                  </a>
                )}
                {entry.phone && (
                  <a href={`tel:${entry.phone}`} className="text-[#c9a13b] hover:underline">
                    {entry.phone}
                  </a>
                )}
                {entry.email && (
                  <a href={`mailto:${entry.email}`} className="text-[#c9a13b] hover:underline">
                    Email
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

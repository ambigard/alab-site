"use client";

import { useState } from "react";
import Link from "next/link";
import {
  supabase,
  VIDEO_CATEGORY_LABELS,
  type VideoCategory,
} from "@/lib/supabase";

const CATEGORIES = Object.keys(VIDEO_CATEGORY_LABELS) as VideoCategory[];

export default function SubmitVideoPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    category: "animated_explainer" as VideoCategory,
    description: "",
    video_url: "",
    related_topic: "",
    submitted_by_name: "",
    submitted_by_email: "",
  });

  function update<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error } = await supabase.from("video_entries").insert([
      {
        ...form,
        status: "pending",
      },
    ]);

    setSubmitting(false);

    if (error) {
      setError(error.message);
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#0d1b2a] text-[#f4f1ea] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="text-5xl mb-4">✅</p>
          <h1 className="text-2xl font-bold mb-3">Thank you!</h1>
          <p className="text-[#f4f1ea]/80 mb-6">
            Your video has been submitted and will be reviewed before it
            appears in the library. Thanks for helping other families learn.
          </p>
          <Link
            href="/videos"
            className="inline-block rounded-full bg-[#c9a13b] text-[#0d1b2a] px-6 py-3 font-semibold hover:bg-[#dcb653] transition"
          >
            Back to Video Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0d1b2a] text-[#f4f1ea] min-h-screen">
      <header className="border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold text-lg tracking-tight">
            ALAB <span className="opacity-60 font-normal">Advocates Louisiana &amp; Beyond</span>
          </Link>
          <Link href="/videos" className="text-sm hover:opacity-80">
            ← Back to Video Library
          </Link>
        </nav>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-[#c9a13b] font-semibold text-sm uppercase tracking-wide mb-2">
          📹 Submit a Video
        </p>
        <h1 className="text-3xl font-bold mb-3">
          Share a Helpful Video
        </h1>
        <p className="text-[#f4f1ea]/80 mb-8">
          Paste a link to a YouTube or Vimeo video. Submissions are reviewed
          before they go live, so the library stays accurate and trustworthy
          for families.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Video title *
            </label>
            <input
              required
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Category *</label>
            <select
              required
              value={form.category}
              onChange={(e) => update("category", e.target.value as VideoCategory)}
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {VIDEO_CATEGORY_LABELS[c]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Video link (YouTube or Vimeo) *
            </label>
            <input
              required
              type="url"
              value={form.video_url}
              onChange={(e) => update("video_url", e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Description *
            </label>
            <textarea
              required
              rows={4}
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              placeholder="What does this video explain or show? Who is it helpful for?"
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Related topic (optional)
            </label>
            <input
              value={form.related_topic}
              onChange={(e) => update("related_topic", e.target.value)}
              placeholder="e.g. IEP meetings, McKinney-Vento, suspension appeals"
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <hr className="border-white/10" />

          <p className="text-sm text-[#f4f1ea]/60">
            Your contact info below is only used if we have a question about
            your submission — it won&apos;t be published.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your name
              </label>
              <input
                value={form.submitted_by_name}
                onChange={(e) => update("submitted_by_name", e.target.value)}
                className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your email
              </label>
              <input
                type="email"
                value={form.submitted_by_email}
                onChange={(e) => update("submitted_by_email", e.target.value)}
                className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-300 text-sm">
              Something went wrong: {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-[#c9a13b] text-[#0d1b2a] px-6 py-3 font-semibold hover:bg-[#dcb653] transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit for Review"}
          </button>
        </form>
      </div>
    </div>
  );
}

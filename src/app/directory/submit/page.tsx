"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase, CATEGORY_LABELS, type DirectoryCategory } from "@/lib/supabase";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as DirectoryCategory[];

export default function SubmitResourcePage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    category: "sports" as DirectoryCategory,
    description: "",
    cost_type: "free" as "free" | "sliding_scale" | "paid",
    cost_details: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    website: "",
    age_range: "",
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

    const { error } = await supabase.from("directory_entries").insert([
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
            Your submission has been received and will be reviewed before it
            appears in the directory. We appreciate you helping other
            families find good resources.
          </p>
          <Link
            href="/directory"
            className="inline-block rounded-full bg-[#c9a13b] text-[#0d1b2a] px-6 py-3 font-semibold hover:bg-[#dcb653] transition"
          >
            Back to Directory
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
          <Link href="/directory" className="text-sm hover:opacity-80">
            ← Back to Directory
          </Link>
        </nav>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-[#c9a13b] font-semibold text-sm uppercase tracking-wide mb-2">
          📝 Submit a Resource
        </p>
        <h1 className="text-3xl font-bold mb-3">
          Know a Great Program for Families?
        </h1>
        <p className="text-[#f4f1ea]/80 mb-8">
          Submissions are reviewed before they go live, so the directory
          stays accurate and trustworthy for families. This usually takes a
          few days.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Program or organization name *
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Category *</label>
            <select
              required
              value={form.category}
              onChange={(e) => update("category", e.target.value as DirectoryCategory)}
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {CATEGORY_LABELS[c]}
                </option>
              ))}
            </select>
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
              placeholder="What does this program offer? Who is it for?"
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Age range</label>
            <input
              value={form.age_range}
              onChange={(e) => update("age_range", e.target.value)}
              placeholder="e.g. 5–12, all ages, high school only"
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Cost *</label>
            <select
              required
              value={form.cost_type}
              onChange={(e) =>
                update("cost_type", e.target.value as "free" | "sliding_scale" | "paid")
              }
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            >
              <option value="free">Free</option>
              <option value="sliding_scale">Sliding Scale</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Cost details
            </label>
            <input
              value={form.cost_details}
              onChange={(e) => update("cost_details", e.target.value)}
              placeholder="e.g. $20/month, free for families on free/reduced lunch"
              className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">City</label>
              <input
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Address</label>
              <input
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Website</label>
            <input
              value={form.website}
              onChange={(e) => update("website", e.target.value)}
              placeholder="https://..."
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

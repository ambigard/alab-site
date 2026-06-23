"use client";

import { useState } from "react";
import Link from "next/link";
import {
  VIDEO_CATEGORY_LABELS,
  type VideoEntry,
  type VideoCategory,
} from "@/lib/supabase";

export default function AdminVideosPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [entries, setEntries] = useState<VideoEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"pending" | "approved" | "rejected" | "all">(
    "pending"
  );
  const [showAddForm, setShowAddForm] = useState(false);

  async function load(pw: string) {
    setLoading(true);
    const res = await fetch("/api/admin/videos", {
      headers: { "x-admin-password": pw },
    });
    if (res.status === 401) {
      setAuthError("Incorrect password");
      setAuthed(false);
      setLoading(false);
      return;
    }
    const data = await res.json();
    setEntries(data.entries ?? []);
    setLoading(false);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError(null);
    await load(password);
    setAuthed(true);
  }

  async function updateStatus(id: string, status: "approved" | "rejected") {
    await fetch("/api/admin/videos", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify({ id, status }),
    });
    load(password);
  }

  const filtered = entries.filter((e) => filter === "all" || e.status === filter);

  if (!authed) {
    return (
      <div className="bg-[#0d1b2a] text-[#f4f1ea] min-h-screen flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="max-w-sm w-full rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h1 className="text-xl font-bold mb-4">Video Library Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full rounded-lg bg-white text-[#0d1b2a] px-4 py-2.5 mb-3"
          />
          {authError && (
            <p className="text-red-300 text-sm mb-3">{authError}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-[#c9a13b] text-[#0d1b2a] px-6 py-2.5 font-semibold hover:bg-[#dcb653] transition"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-[#0d1b2a] text-[#f4f1ea] min-h-screen">
      <header className="border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-bold text-lg tracking-tight">
            ALAB Video Admin
          </Link>
          <Link href="/videos" className="text-sm hover:opacity-80">
            View Public Video Library →
          </Link>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-2">
            {(["pending", "approved", "rejected", "all"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  filter === f
                    ? "bg-[#c9a13b] text-[#0d1b2a]"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                {f === "pending" &&
                  ` (${entries.filter((e) => e.status === "pending").length})`}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowAddForm((s) => !s)}
            className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-1.5 text-sm font-medium transition"
          >
            {showAddForm ? "Cancel" : "+ Add Video Directly"}
          </button>
        </div>

        {showAddForm && (
          <AddVideoForm
            password={password}
            onAdded={() => {
              setShowAddForm(false);
              load(password);
            }}
          />
        )}

        {loading && <p className="text-[#f4f1ea]/60">Loading...</p>}

        <div className="space-y-4">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="inline-block rounded-full bg-[#c9a13b]/20 text-[#c9a13b] text-xs font-medium px-3 py-1 mb-2">
                    {VIDEO_CATEGORY_LABELS[entry.category as VideoCategory]}
                  </span>
                  <h3 className="font-bold text-lg">{entry.title}</h3>
                  <p className="text-sm text-[#f4f1ea]/70 mt-1 max-w-xl">
                    {entry.description}
                  </p>
                  <a
                    href={entry.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#c9a13b] hover:underline block mt-1"
                  >
                    {entry.video_url}
                  </a>
                  {entry.submitted_by_name && (
                    <p className="text-xs text-[#f4f1ea]/50 mt-2">
                      Submitted by {entry.submitted_by_name}
                      {entry.submitted_by_email
                        ? ` (${entry.submitted_by_email})`
                        : ""}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  {entry.status !== "approved" && (
                    <button
                      onClick={() => updateStatus(entry.id, "approved")}
                      className="rounded-full bg-green-600/80 hover:bg-green-600 px-4 py-1.5 text-sm font-medium transition"
                    >
                      Approve
                    </button>
                  )}
                  {entry.status !== "rejected" && (
                    <button
                      onClick={() => updateStatus(entry.id, "rejected")}
                      className="rounded-full bg-red-600/80 hover:bg-red-600 px-4 py-1.5 text-sm font-medium transition"
                    >
                      Reject
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {!loading && filtered.length === 0 && (
            <p className="text-[#f4f1ea]/60">No entries in this view.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function AddVideoForm({
  password,
  onAdded,
}: {
  password: string;
  onAdded: () => void;
}) {
  const [form, setForm] = useState({
    title: "",
    category: "animated_explainer" as VideoCategory,
    description: "",
    video_url: "",
    related_topic: "",
  });
  const [saving, setSaving] = useState(false);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/admin/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": password,
      },
      body: JSON.stringify(form),
    });
    setSaving(false);
    onAdded();
  }

  return (
    <form
      onSubmit={handleAdd}
      className="rounded-xl border border-white/10 bg-white/5 p-5 mb-6 space-y-3"
    >
      <h3 className="font-semibold">Add a pre-approved video</h3>
      <input
        required
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full rounded-lg bg-white text-[#0d1b2a] px-3 py-2"
      />
      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value as VideoCategory })
        }
        className="w-full rounded-lg bg-white text-[#0d1b2a] px-3 py-2"
      >
        {Object.entries(VIDEO_CATEGORY_LABELS).map(([k, v]) => (
          <option key={k} value={k}>
            {v}
          </option>
        ))}
      </select>
      <input
        required
        type="url"
        placeholder="Video URL (YouTube or Vimeo)"
        value={form.video_url}
        onChange={(e) => setForm({ ...form, video_url: e.target.value })}
        className="w-full rounded-lg bg-white text-[#0d1b2a] px-3 py-2"
      />
      <textarea
        required
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full rounded-lg bg-white text-[#0d1b2a] px-3 py-2"
      />
      <input
        placeholder="Related topic (optional)"
        value={form.related_topic}
        onChange={(e) => setForm({ ...form, related_topic: e.target.value })}
        className="w-full rounded-lg bg-white text-[#0d1b2a] px-3 py-2"
      />
      <button
        type="submit"
        disabled={saving}
        className="rounded-full bg-[#c9a13b] text-[#0d1b2a] px-5 py-2 font-semibold hover:bg-[#dcb653] transition disabled:opacity-50"
      >
        {saving ? "Adding..." : "Add Video"}
      </button>
    </form>
  );
}

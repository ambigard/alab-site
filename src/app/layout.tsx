import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALAB — Advocates Louisiana & Beyond",
  description:
    "ALAB gives Louisiana parents the legal knowledge, ready-to-use documents, and community connections to fight for their children's education — and win.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creator Vault — Stop editing from scratch",
  description:
    "A repeatable system for turning half-formed ideas into scroll-stopping short-form, without staring at a blank timeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

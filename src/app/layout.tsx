import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tavleen Kaur",
  description:
    "I learn by building, breaking, and occasionally diving too deep into how things work.",
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

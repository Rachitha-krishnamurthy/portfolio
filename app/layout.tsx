import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachitha K — Full-Stack Developer",
  description:
    "Immersive portfolio of Rachitha K, a full-stack developer focused on scalable systems, APIs, databases and high-performance web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

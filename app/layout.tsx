import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madhurimapanigrahi.dev"),
  title: "Madhurima Panigrahi — Full-Stack Developer & AI Systems Engineer",
  description:
    "Computer Science undergraduate (Batch 2027) experienced in full-stack web applications, Generative AI & RAG systems, and scalable backend architectures.",
  keywords: [
    "Madhurima Panigrahi",
    "Full-Stack Developer",
    "Software Developer",
    "Next.js",
    "React.js",
    "Node.js",
    "MongoDB",
    "Generative AI",
    "RAG Systems",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Madhurima Panigrahi", url: "https://github.com/MADHURIMAPANIGRAHI" }],
  creator: "Madhurima Panigrahi",
  openGraph: {
    title: "Madhurima Panigrahi — Full-Stack Developer & AI Systems Engineer",
    description:
      "Crafting scalable web architectures, automation workflows, and AI-integrated applications with Next.js, TypeScript, and RAG pipelines.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhurima Panigrahi — Full-Stack Developer",
    description: "Full-stack developer building scalable applications and GenAI / RAG systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

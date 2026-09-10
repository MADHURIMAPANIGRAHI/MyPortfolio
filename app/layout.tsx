import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.dev"), // Replace with your deployed site URL.
  title: "Madhurima Panigrahi — Full Stack Developer",
  description: "B.Tech student and full stack developer building thoughtful web applications with Next.js, MERN, and Java.",
  openGraph: {
    title: "Madhurima Panigrahi — Full Stack Developer",
    description: "Portfolio of a B.Tech student building with Next.js, MERN, and Java.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}

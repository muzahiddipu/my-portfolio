import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dipu | Web Developer Portfolio",
  description:
    "Portfolio of Dipu — an aspiring junior web developer and BSc Mathematics student building modern, accessible, full-stack web experiences with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Dipu | Web Developer Portfolio",
    description:
      "Explore selected projects and web experiences built by Dipu — junior web developer focused on React, Next.js, TypeScript, and full-stack development.",
    url: "https://my-portfolio-dipu-labs.vercel.app/",
    siteName: "Dipu | Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#101A35",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

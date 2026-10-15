import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipu | Junior Web Developer & Full-Stack Builder",
  description:
    "Personal developer portfolio of Dipu — Junior Web Developer passionate about building purposeful, modern, and accessible web experiences with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Dipu | Junior Web Developer",
    description:
      "Building for the web, with purpose. Explore selected projects and web experiences built by Dipu.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[#C8F169] selection:text-[#101A35]">
        {children}
      </body>
    </html>
  );
}

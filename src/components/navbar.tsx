"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#223561]/80 bg-[#101A35]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-[#F3F5FA] transition-colors"
          aria-label="Dipu - Developer Portfolio"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#223561] bg-[#172443] font-mono text-xs font-semibold text-[#C8F169] transition-all group-hover:border-[#C8F169]/50 group-hover:shadow-[0_0_12px_rgba(200,241,105,0.2)]">
            D
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Dipu<span className="text-[#C8F169]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#A7B3CC] transition-colors hover:text-[#F3F5FA] focus-visible:text-[#C8F169] focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/muzahiddipu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#223561] bg-[#172443] text-[#A7B3CC] transition-all hover:border-[#C8F169]/40 hover:text-[#F3F5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F169]"
            aria-label="GitHub Profile (muzahiddipu)"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#223561] bg-[#172443] px-3.5 text-xs font-semibold text-[#F3F5FA] transition-all hover:border-[#C8F169]/60 hover:text-[#C8F169] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F169]"
          >
            <FileText className="h-3.5 w-3.5 text-[#C8F169]" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1 rounded-md border border-[#223561] bg-[#172443] px-2.5 text-xs font-medium text-[#F3F5FA] hover:border-[#C8F169]/50"
          >
            <FileText className="h-3 w-3 text-[#C8F169]" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#223561] bg-[#172443] text-[#A7B3CC] transition-colors hover:text-[#F3F5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F169]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[#C8F169]" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#223561] bg-[#101A35]/95 px-4 pt-2 pb-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#A7B3CC] transition-colors hover:bg-[#172443] hover:text-[#F3F5FA]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[#223561]/60 flex items-center justify-between px-1">
              <a
                href="https://github.com/muzahiddipu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-[#A7B3CC] hover:text-[#C8F169]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>github.com/muzahiddipu</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

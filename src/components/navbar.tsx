"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
] as const;

/** IDs of the sections we track for the active nav indicator. */
const SECTION_IDS = ["projects", "about", "skills", "contact"] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  /* ── Active-section detection via IntersectionObserver ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Close mobile menu on Escape ── */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen, handleKeyDown]);

  /* ── Helper: is this link the "active" one? ── */
  function isActive(href: string) {
    if (href === "/") return activeSection === "";
    // href is "#projects" → strip "#" → "projects"
    return href.startsWith("#") && activeSection === href.slice(1);
  }

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        borderColor: "color-mix(in srgb, var(--color-midnight-border) 80%, transparent)",
        backgroundColor: "color-mix(in srgb, var(--color-midnight-bg) 85%, transparent)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ── Brand ── */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight"
          style={{ color: "var(--color-midnight-text)" }}
          aria-label="Dipu — home"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg border font-mono text-xs font-semibold transition-all"
            style={{
              borderColor: "var(--color-midnight-border)",
              backgroundColor: "var(--color-midnight-surface)",
              color: "var(--color-midnight-lime)",
            }}
          >
            D
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Dipu
            <span style={{ color: "var(--color-midnight-lime)" }}>.</span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:underline"
                style={{
                  color: active
                    ? "var(--color-midnight-lime)"
                    : "var(--color-midnight-muted)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-midnight-text)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = active
                    ? "var(--color-midnight-lime)"
                    : "var(--color-midnight-muted)")
                }
              >
                {link.label}
                {active && (
                  <span
                    className="absolute -bottom-[22px] left-0 h-[2px] w-full rounded-full"
                    style={{ backgroundColor: "var(--color-midnight-lime)" }}
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Desktop: GitHub button ── */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/muzahiddipu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border transition-all focus-visible:outline-none focus-visible:ring-2"
            style={{
              borderColor: "var(--color-midnight-border)",
              backgroundColor: "var(--color-midnight-surface)",
              color: "var(--color-midnight-muted)",
              ["--tw-ring-color" as string]: "var(--color-midnight-lime)",
            }}
            aria-label="GitHub profile (muzahiddipu)"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "color-mix(in srgb, var(--color-midnight-lime) 40%, transparent)";
              el.style.color = "var(--color-midnight-text)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-midnight-border)";
              el.style.color = "var(--color-midnight-muted)";
            }}
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        </div>

        {/* ── Mobile menu button ── */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2"
            style={{
              borderColor: "var(--color-midnight-border)",
              backgroundColor: "var(--color-midnight-surface)",
              color: "var(--color-midnight-muted)",
              ["--tw-ring-color" as string]: "var(--color-midnight-lime)",
            }}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" style={{ color: "var(--color-midnight-lime)" }} />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="false"
          aria-label="Navigation menu"
          className="border-b px-4 pb-6 pt-2 md:hidden"
          style={{
            borderColor: "var(--color-midnight-border)",
            backgroundColor: "color-mix(in srgb, var(--color-midnight-bg) 95%, transparent)",
            backdropFilter: "blur(16px)",
          }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMobile}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    color: active ? "var(--color-midnight-lime)" : "var(--color-midnight-muted)",
                    backgroundColor: active
                      ? "color-mix(in srgb, var(--color-midnight-lime) 8%, transparent)"
                      : "transparent",
                    ["--tw-ring-color" as string]: "var(--color-midnight-lime)",
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            {/* GitHub row */}
            <div
              className="mt-3 flex items-center justify-between border-t px-1 pt-3"
              style={{ borderColor: "color-mix(in srgb, var(--color-midnight-border) 60%, transparent)" }}
            >
              <a
                href="https://github.com/muzahiddipu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:underline"
                style={{ color: "var(--color-midnight-muted)" }}
                aria-label="GitHub profile (muzahiddipu)"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>github.com/muzahiddipu</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ── Inline GitHub SVG to avoid an extra import ── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

import Link from "next/link";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
] as const;

/* ─────────────────────────────────────────────
   Footer — server component.
   Copyright year is evaluated at build time
   (correct for a statically generated portfolio).
───────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--color-midnight-border)",
        backgroundColor: "var(--color-midnight-bg)",
        color: "var(--color-midnight-muted)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

          {/* ── Brand + tagline ── */}
          <div>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2 font-bold tracking-tight focus-visible:outline-none focus-visible:underline"
              style={{ color: "var(--color-midnight-text)" }}
              aria-label="Dipu — back to top"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg border font-mono text-xs font-semibold"
                style={{
                  borderColor: "var(--color-midnight-border)",
                  backgroundColor: "var(--color-midnight-surface)",
                  color: "var(--color-midnight-lime)",
                }}
              >
                D
              </span>
              <span>
                Dipu
                <span style={{ color: "var(--color-midnight-lime)" }}>.</span>
              </span>
            </Link>

            <p
              className="mt-2 max-w-[28ch] text-xs leading-relaxed"
              style={{ color: "var(--color-midnight-muted)" }}
            >
              Aspiring junior web developer, building in public.
            </p>
          </div>

          {/* ── Nav + GitHub + copyright ── */}
          <div className="flex flex-col gap-4 sm:items-end">
            {/* Nav links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center text-xs font-medium transition-colors duration-150 hover:text-[color:var(--color-midnight-text)] focus-visible:outline-none focus-visible:underline"
                      style={{ color: "var(--color-midnight-muted)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://github.com/muzahiddipu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:underline"
                    style={{ color: "var(--color-midnight-lime)" }}
                    aria-label="GitHub profile (muzahiddipu) — opens in new tab"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>

            {/* Copyright */}
            <p
              className="text-xs"
              style={{ color: "var(--color-midnight-muted)", opacity: 0.7 }}
            >
              &copy; {year} Dipu. Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { CONTACT_EMAIL } from "@/lib/contact";
import { EmailButton } from "./email-button";

/* ─────────────────────────────────────────────
   ContactSection — server component.
   The email button is rendered only when
   CONTACT_EMAIL in src/lib/contact.ts is set.
───────────────────────────────────────────── */
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t py-20 sm:py-28 lg:py-32"
      style={{ borderColor: "var(--color-midnight-border)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl border p-8 sm:p-12 lg:p-16"
          style={{
            borderColor: "var(--color-midnight-border)",
            backgroundColor: "var(--color-midnight-surface)",
          }}
        >
          {/* Subtle tonal wash — not a neon glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--color-midnight-lime) 6%, transparent), transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl">
            {/* Label */}
            <span
              className="inline-block rounded-full border px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{
                borderColor: "var(--color-midnight-border)",
                backgroundColor: "var(--color-midnight-bg)",
                color: "var(--color-midnight-lime)",
              }}
            >
              Contact
            </span>

            {/* Heading */}
            <h2
              id="contact-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: "var(--color-midnight-text)" }}
            >
              Have an opportunity or project in mind?
            </h2>

            {/* Honest copy — junior dev, no fake claims */}
            <p
              className="mt-5 max-w-[54ch] text-base leading-relaxed"
              style={{ color: "var(--color-midnight-muted)" }}
            >
              I&apos;m actively looking for my first junior role — internship
              or full-time — where I can write real code, receive real
              feedback, and keep improving. If you&apos;re hiring, or want to
              talk about a project, I&apos;d genuinely like to hear from you.
            </p>

            <p
              className="mt-3 max-w-[54ch] text-sm leading-relaxed"
              style={{ color: "var(--color-midnight-muted)" }}
            >
              GitHub is the best place to see how I work. Browse the repos,
              open an issue, or just follow along.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              {/* Primary — GitHub (always visible) */}
              <a
                href="https://github.com/muzahiddipu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg px-6 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: "var(--color-midnight-lime)",
                  color: "var(--color-midnight-bg)",
                  ["--tw-ring-color" as string]: "var(--color-midnight-lime)",
                  ["--tw-ring-offset-color" as string]: "var(--color-midnight-bg)",
                }}
                aria-label="GitHub profile (muzahiddipu) — opens in new tab"
              >
                <GitHubIcon className="h-4 w-4 shrink-0" />
                <span>View GitHub Profile</span>
              </a>

              {/* Email — only when CONTACT_EMAIL is set */}
              {CONTACT_EMAIL.trim() !== "" && (
                <EmailButton email={CONTACT_EMAIL} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Inline GitHub SVG ── */
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

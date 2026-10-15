import { ArrowDown } from "lucide-react";
import { FadeIn } from "./fade-in";
import { HeroCtas } from "./hero-ctas";

/* ─────────────────────────────────────────────
   HeroSection — server component (no state)
   Visual: a slim terminal-style code card
───────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      {/* Subtle radial wash — NOT a neon glow, just depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 60% 30%, color-mix(in srgb, var(--color-midnight-lime) 5%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Two-column on lg+, single on mobile */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">

          {/* ── LEFT: copy ── */}
          <FadeIn className="flex flex-col items-start" delay={0.08}>
            <div className="flex flex-col items-start">

              {/* Label chip */}
              <span
                className="mb-6 inline-block rounded-full border px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em]"
                style={{
                  borderColor: "var(--color-midnight-border)",
                  backgroundColor: "var(--color-midnight-surface)",
                  color: "var(--color-midnight-lime)",
                }}
              >
                Aspiring Web Developer
              </span>

              {/* Heading — balanced line-breaks via max-width, not forced breaks */}
              <h1
                id="hero-heading"
                className="max-w-[18ch] text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]"
                style={{ color: "var(--color-midnight-text)" }}
              >
                Building thoughtful{" "}
                <span style={{ color: "var(--color-midnight-lime)" }}>
                  experiences
                </span>{" "}
                for the web.
              </h1>

              {/* Supporting text */}
              <p
                className="mt-6 max-w-[52ch] text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--color-midnight-muted)" }}
              >
                I&apos;m Dipu — a BSc Mathematics student who builds with{" "}
                <strong
                  className="font-medium"
                  style={{ color: "var(--color-midnight-text)" }}
                >
                  React&nbsp;&amp;&nbsp;Next.js
                </strong>
                . I care about clean component architecture, accessible
                interfaces, and shipping work that actually runs in the browser.
              </p>

              {/* CTAs — client component for hover states */}
              <HeroCtas />

              {/* Scroll hint */}
              <p
                className="mt-12 hidden items-center gap-2 text-xs sm:flex"
                style={{ color: "var(--color-midnight-muted)" }}
                aria-hidden="true"
              >
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                Scroll to explore
              </p>
            </div>
          </FadeIn>

          {/* ── RIGHT: code card visual ── */}
          <FadeIn className="flex justify-center lg:justify-end" from="right" delay={0.12}>
            <div aria-hidden="true">
              <CodeCard />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Code card — static decorative terminal block
───────────────────────────────────────────── */
function CodeCard() {
  return (
    <div
      className="w-full max-w-sm rounded-2xl border shadow-2xl shadow-black/40"
      style={{
        borderColor: "var(--color-midnight-border)",
        backgroundColor: "var(--color-midnight-surface)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center justify-between border-b px-4 py-3"
        style={{ borderColor: "var(--color-midnight-border)" }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full opacity-80"
            style={{ backgroundColor: "var(--color-midnight-destructive)" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full opacity-80"
            style={{ backgroundColor: "#E5B54F" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full opacity-80"
            style={{ backgroundColor: "var(--color-midnight-lime)" }}
          />
        </div>
        {/* File label */}
        <span
          className="font-mono text-[10px] tracking-wide"
          style={{ color: "var(--color-midnight-muted)" }}
        >
          developer.ts
        </span>
        {/* Status dot */}
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: "var(--color-midnight-lime)", opacity: 0.8 }}
        />
      </div>

      {/* Code body */}
      <div className="px-5 py-5 font-mono text-[13px] leading-7">
        {/* Line 1 */}
        <p>
          <Kw>const</Kw>{" "}
          <Sym>dipu</Sym>
          <Pt> = {"{"}</Pt>
        </p>
        {/* Line 2 */}
        <p className="pl-6">
          <Prop>role</Prop>
          <Pt>: </Pt>
          <Str>&quot;Junior Web Developer&quot;</Str>
          <Pt>,</Pt>
        </p>
        {/* Line 3 */}
        <p className="pl-6">
          <Prop>focus</Prop>
          <Pt>: [</Pt>
        </p>
        {/* Line 4-7 */}
        {[
          "React & Next.js",
          "TypeScript",
          "Full-Stack",
          "Accessibility",
        ].map((item, i, arr) => (
          <p key={item} className="pl-12">
            <Str>&quot;{item}&quot;</Str>
            {i < arr.length - 1 && <Pt>,</Pt>}
          </p>
        ))}
        {/* Line 8 */}
        <p className="pl-6">
          <Pt>],</Pt>
        </p>
        {/* Line 9 */}
        <p className="pl-6">
          <Prop>available</Prop>
          <Pt>: </Pt>
          <Bool>true</Bool>
          <Pt>,</Pt>
        </p>
        {/* Line 10 */}
        <p>
          <Pt>{"}"}</Pt>
          <Pt>;</Pt>
        </p>

        {/* Blank separator */}
        <p className="mt-3">&nbsp;</p>

        {/* "Terminal prompt" line */}
        <p className="flex items-center gap-2">
          <span style={{ color: "var(--color-midnight-lime)" }}>▶</span>
          <span style={{ color: "var(--color-midnight-muted)" }}>
            ready to contribute
          </span>
          {/* blinking cursor */}
          <span
            className="inline-block h-[1.1em] w-[2px] animate-pulse rounded-sm align-middle"
            style={{ backgroundColor: "var(--color-midnight-lime)" }}
          />
        </p>
      </div>
    </div>
  );
}

/* ── Tiny token-coloured span helpers ── */
function Kw({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--color-midnight-lime)" }}>{children}</span>
  );
}
function Sym({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--color-midnight-text)" }}>{children}</span>
  );
}
function Prop({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "#93C5FD" }}>{children}</span>
  );
}
function Str({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "#86EFAC" }}>{children}</span>
  );
}
function Bool({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "#F9A8D4" }}>{children}</span>
  );
}
function Pt({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--color-midnight-muted)" }}>{children}</span>
  );
}


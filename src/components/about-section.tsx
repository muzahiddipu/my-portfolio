/* ─────────────────────────────────────────────
   AboutSection — server component (no state)
───────────────────────────────────────────── */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t py-20 sm:py-28"
      style={{ borderColor: "var(--color-midnight-border)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: heading + intro ── */}
          <div>
            <span
              className="inline-block rounded-full border px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{
                borderColor: "var(--color-midnight-border)",
                backgroundColor: "var(--color-midnight-surface)",
                color: "var(--color-midnight-lime)",
              }}
            >
              About
            </span>

            <h2
              id="about-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: "var(--color-midnight-text)" }}
            >
              A bit about me
            </h2>

            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "var(--color-midnight-muted)" }}
            >
              I&apos;m Dipu — a{" "}
              <strong
                className="font-medium"
                style={{ color: "var(--color-midnight-text)" }}
              >
                BSc Mathematics
              </strong>{" "}
              student who got pulled into web development by the immediacy of
              it: you write something, and it works in a browser, right now.
              That feedback loop keeps me hooked.
            </p>

            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "var(--color-midnight-muted)" }}
            >
              I learn by building real things — not toy examples. The three
              projects on this page are deployed applications I built to solve
              actual problems: a news portal, a book tracker, and a workout
              planner. Each one taught me something I couldn&apos;t have
              learned from a tutorial alone.
            </p>

            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "var(--color-midnight-muted)" }}
            >
              The analytical habits from studying maths carry over: break the
              problem down, understand it precisely, then build the simplest
              thing that solves it. I&apos;m looking for a junior role where I
              can keep doing that alongside people who care about the craft.
            </p>
          </div>

          {/* ── Right: two plain fact cards ── */}
          <div className="flex flex-col gap-5 lg:justify-center">

            <FactCard
              label="How I work"
              text="I start with the user-facing behaviour, build toward it, and stop when it works. No gold-plating, no invented features."
            />

            <FactCard
              label="What I focus on"
              text="React and Next.js for the front-end, accessible HTML and clear component boundaries throughout, TypeScript to catch mistakes before they ship."
            />

            <FactCard
              label="What I'm after"
              text="A junior position — remote or on-site — where the team ships real software, gives honest feedback, and doesn't mind questions."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Small bordered fact card — no icon, no fluff ── */
function FactCard({ label, text }: { label: string; text: string }) {
  return (
    <div
      className="rounded-xl border p-5 transition-colors duration-200"
      style={{
        borderColor: "var(--color-midnight-border)",
        backgroundColor: "var(--color-midnight-surface)",
      }}
    >
      <p
        className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.13em]"
        style={{ color: "var(--color-midnight-lime)" }}
      >
        {label}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-midnight-muted)" }}
      >
        {text}
      </p>
    </div>
  );
}

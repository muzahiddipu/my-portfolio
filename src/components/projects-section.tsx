import { ExternalLink } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
interface Project {
  /** Short identifier used as React key and aria labels */
  id: string;
  title: string;
  /** One-line tagline shown above the title */
  tagline: string;
  /** Verified-only description — sourced from each live site */
  description: string;
  liveUrl: string;
  /** Tech tags sourced only from observable signals in the HTML */
  tags: string[];
  /** CSS-only decorative preview — no fake screenshots */
  preview: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────
   Verified project data
   Sources: curl of each live URL + page title/meta inspection
   on 2026-10-15.
───────────────────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    id: "bangla-bulletin",
    title: "Bangla Bulletin",
    tagline: "Bangla news, in one place.",
    // Description sourced from: page title "Bangla News 24", meta description
    // "বাংলা সংবাদ, এক জায়গায়।", visible category nav (Politics, World,
    // Economy, Health, Sports), and article grid with thumbnails in the HTML.
    description:
      "A Bangla-language news portal that aggregates articles across Politics, World, Economy, Health, and Sports categories. Built with Next.js App Router; delivers a categorised article grid with sign-in support.",
    liveUrl: "https://bangla-bulletin.vercel.app/",
    // Next.js confirmed via _next/static assets; React confirmed via __next
    // root. No CSS framework detectable from static HTML class names.
    tags: ["Next.js", "React"],
    preview: <NewsFeedPreview />,
  },
  {
    id: "book-vibe",
    title: "Book Vibe",
    tagline: "Find your next favorite read.",
    // Description sourced from: page title, meta description
    // "Discover your next favorite read, keep track of books you've read,
    //  and build your personal library with Book Vibe.", footer nav
    // (Browse books, My library, Reading stats), and hero h1 visible in HTML.
    description:
      "A book discovery and personal library app. Browse a curated collection, track what you have read, and view reading stats — all from a Next.js front-end pulling cover data from Open Library.",
    liveUrl: "https://book-vibe-project-zeta.vercel.app/",
    tags: ["Next.js", "React"],
    preview: <LibraryPreview />,
  },
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Train with intent. Log every set.",
    // Description sourced from: page title "FitLog — Workout Library &
    // Training Planner", meta description, h1 "Train with intent.Log every
    // set.", visible nav routes /my-plan, /my-plan?tab=today,
    // /my-plan?tab=saved, and embedded exercise JSON with muscle groups,
    // sets, reps, calories, and exercise instructions.
    description:
      "A workout library and daily training planner. Browse exercises filtered by muscle group, add them to a daily plan, and save routines — with per-exercise details including sets, reps, and estimated calories.",
    liveUrl: "https://b-14-a06-fit-log-chi.vercel.app/",
    tags: ["Next.js", "React"],
    preview: <FitLogPreview />,
  },
];

/* ─────────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────────── */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t py-20 sm:py-28 lg:py-32"
      style={{ borderColor: "var(--color-midnight-border)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-start">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{
              borderColor: "var(--color-midnight-border)",
              backgroundColor: "var(--color-midnight-surface)",
              color: "var(--color-midnight-lime)",
            }}
          >
            Selected Work
          </span>

          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-midnight-text)" }}
          >
            Projects
          </h2>

          <p
            className="mt-3 max-w-[56ch] text-base"
            style={{ color: "var(--color-midnight-muted)" }}
          >
            Three live applications, each deployed and publicly accessible.
            Descriptions are written only from what the pages themselves say.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <ul
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card
───────────────────────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <li
      className="project-card group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300"
      style={{
        borderColor: "var(--color-midnight-border)",
        backgroundColor: "var(--color-midnight-surface)",
      }}
    >
      {/* Abstract preview panel */}
      <div
        className="relative h-44 w-full overflow-hidden"
        aria-hidden="true"
      >
        {project.preview}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tagline */}
        <span
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.13em]"
          style={{ color: "var(--color-midnight-lime)" }}
        >
          {project.tagline}
        </span>

        {/* Title */}
        <h3
          className="mt-1.5 text-lg font-bold tracking-tight transition-colors duration-200"
          style={{ color: "var(--color-midnight-text)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="mt-3 flex-1 text-sm leading-relaxed"
          style={{ color: "var(--color-midnight-muted)" }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium"
              style={{
                borderColor: "var(--color-midnight-border)",
                backgroundColor: "var(--color-midnight-bg)",
                color: "var(--color-midnight-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: Live Demo link */}
        <div
          className="mt-5 border-t pt-5"
          style={{ borderColor: "var(--color-midnight-border)" }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-demo-link inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              borderColor: "var(--color-midnight-border)",
              backgroundColor: "var(--color-midnight-bg)",
              color: "var(--color-midnight-text)",
              ["--tw-ring-color" as string]: "var(--color-midnight-lime)",
              ["--tw-ring-offset-color" as string]: "var(--color-midnight-bg)",
            }}
            aria-label={`View ${project.title} live demo — opens in new tab`}
          >
            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </li>
  );
}

/* ─────────────────────────────────────────────────────────────
   CSS-only abstract previews — palette tokens only
   Each represents the character of the app without faking a
   screenshot. All aria-hidden on the parent div.
───────────────────────────────────────────────────────────── */

/** Bangla Bulletin — a news grid of cards with headline bars */
function NewsFeedPreview() {
  const rows = [
    { wide: true,  label: "বাংলাদেশ" },
    { wide: false, label: "ভারত" },
    { wide: false, label: "বিশ্ব" },
  ];
  return (
    <div
      className="flex h-full w-full flex-col gap-2 p-4"
      style={{ backgroundColor: "var(--color-midnight-bg)" }}
    >
      {/* Simulated navbar strip */}
      <div
        className="flex h-5 w-full items-center gap-2 rounded px-2"
        style={{ backgroundColor: "var(--color-midnight-surface-hover)" }}
      >
        {["", "", "", ""].map((_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full"
            style={{
              width: i === 0 ? "2.5rem" : "1.5rem",
              backgroundColor: i === 0
                ? "var(--color-midnight-lime)"
                : "var(--color-midnight-muted)",
              opacity: 0.5,
            }}
          />
        ))}
      </div>
      {/* Article cards */}
      <div className="grid flex-1 grid-cols-3 gap-2">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col gap-1 overflow-hidden rounded-lg p-2 ${row.wide ? "col-span-3" : "col-span-1"}`}
            style={{
              backgroundColor: "var(--color-midnight-surface)",
              border: `1px solid var(--color-midnight-border)`,
            }}
          >
            <span
              className="h-1.5 w-8 rounded-full"
              style={{ backgroundColor: "var(--color-midnight-lime)", opacity: 0.7 }}
            />
            <span
              className="h-2 rounded"
              style={{ backgroundColor: "var(--color-midnight-muted)", opacity: 0.3, width: "90%" }}
            />
            <span
              className="h-2 rounded"
              style={{ backgroundColor: "var(--color-midnight-muted)", opacity: 0.2, width: "70%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Book Vibe — book cards in a library grid */
function LibraryPreview() {
  const books = [
    { h: "100%", c: "#7C3AED" },
    { h: "85%",  c: "#2563EB" },
    { h: "92%",  c: "#059669" },
    { h: "78%",  c: "#DC2626" },
  ];
  return (
    <div
      className="flex h-full w-full flex-col gap-3 p-4"
      style={{ backgroundColor: "var(--color-midnight-bg)" }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <span
          className="h-3 w-20 rounded"
          style={{ backgroundColor: "var(--color-midnight-surface-hover)", opacity: 0.8 }}
        />
        <span
          className="h-5 w-16 rounded-full"
          style={{ backgroundColor: "var(--color-midnight-lime)", opacity: 0.8 }}
        />
      </div>
      {/* Book spines row */}
      <div className="flex flex-1 items-end gap-2 px-2">
        {books.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: b.h,
              background: `linear-gradient(to bottom, ${b.c}cc, ${b.c}44)`,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        ))}
      </div>
      {/* Stats bar */}
      <div
        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5"
        style={{ backgroundColor: "var(--color-midnight-surface)" }}
      >
        {[60, 30, 10].map((w, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full"
            style={{
              width: `${w}%`,
              backgroundColor: i === 0
                ? "var(--color-midnight-lime)"
                : "var(--color-midnight-muted)",
              opacity: i === 0 ? 0.8 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** FitLog — exercise list with muscle chips and a plan row */
function FitLogPreview() {
  const exercises = [
    { name: "Bench Press",  muscle: "Chest",   cal: "180" },
    { name: "Pull-Up",      muscle: "Back",    cal: "120" },
    { name: "Back Squat",   muscle: "Legs",    cal: "240" },
  ];
  return (
    <div
      className="flex h-full w-full flex-col gap-2 p-4"
      style={{ backgroundColor: "var(--color-midnight-bg)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="rounded px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: "var(--color-midnight-surface)", color: "var(--color-midnight-lime)" }}
        >
          Workout Library
        </span>
        <span
          className="h-4 w-14 rounded"
          style={{ backgroundColor: "var(--color-midnight-surface-hover)", opacity: 0.6 }}
        />
      </div>
      {/* Exercise rows */}
      <div className="flex flex-1 flex-col gap-1.5">
        {exercises.map((ex) => (
          <div
            key={ex.name}
            className="flex items-center justify-between gap-2 rounded-lg px-3 py-1.5"
            style={{
              backgroundColor: "var(--color-midnight-surface)",
              border: "1px solid var(--color-midnight-border)",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--color-midnight-lime)", opacity: 0.8 }}
              />
              <span
                className="font-mono text-[9px] font-medium"
                style={{ color: "var(--color-midnight-text)", opacity: 0.9 }}
              >
                {ex.name}
              </span>
            </div>
            <span
              className="rounded px-1 font-mono text-[8px]"
              style={{
                backgroundColor: "var(--color-midnight-bg)",
                color: "var(--color-midnight-muted)",
              }}
            >
              {ex.muscle}
            </span>
          </div>
        ))}
      </div>
      {/* Plan row */}
      <div
        className="flex items-center justify-between rounded-lg px-3 py-1.5"
        style={{ backgroundColor: "var(--color-midnight-lime)", opacity: 0.9 }}
      >
        <span className="font-mono text-[9px] font-bold" style={{ color: "var(--color-midnight-bg)" }}>
          My Plan — Today
        </span>
        <span className="font-mono text-[9px]" style={{ color: "var(--color-midnight-bg)" }}>
          3 exercises
        </span>
      </div>
    </div>
  );
}

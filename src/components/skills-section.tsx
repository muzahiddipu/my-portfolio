import { Code2, Wrench, Compass } from "lucide-react";

/* ─────────────────────────────────────────────
   Skill data — exactly what the spec lists,
   grouped into three categories.
   No percentages, no progress bars, no levels.
───────────────────────────────────────────── */
interface SkillGroup {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Technologies I use to build what you see in the browser.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    description: "Day-to-day tools for version control and development.",
    icon: Wrench,
    skills: ["Git", "GitHub", "npm", "Browser DevTools"],
  },
  {
    id: "exploring",
    label: "Currently Exploring",
    description: "Areas I am actively learning and building toward.",
    icon: Compass,
    skills: ["Full-stack development", "Backend", "AI-assisted development"],
  },
];

/* ─────────────────────────────────────────────
   SkillsSection — server component (no state)
───────────────────────────────────────────── */
export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t py-20 sm:py-28"
      style={{ borderColor: "var(--color-midnight-border)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col items-start">
          <span
            className="inline-block rounded-full border px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{
              borderColor: "var(--color-midnight-border)",
              backgroundColor: "var(--color-midnight-surface)",
              color: "var(--color-midnight-lime)",
            }}
          >
            Skills
          </span>

          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-midnight-text)" }}
          >
            What I work with
          </h2>

          <p
            className="mt-3 max-w-[56ch] text-base"
            style={{ color: "var(--color-midnight-muted)" }}
          >
            No ratings or percentages — just an honest list of what I use,
            grouped by category.
          </p>
        </div>

        {/* ── Groups ── */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <SkillGroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SkillGroupCard
───────────────────────────────────────────── */
function SkillGroupCard({ group }: { group: SkillGroup }) {
  const Icon = group.icon;
  const isExploring = group.id === "exploring";

  return (
    <div
      className="flex flex-col rounded-2xl border p-6 transition-colors duration-200"
      style={{
        borderColor: "var(--color-midnight-border)",
        backgroundColor: "var(--color-midnight-surface)",
      }}
    >
      {/* Group header */}
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
          style={{
            borderColor: "var(--color-midnight-border)",
            backgroundColor: "var(--color-midnight-bg)",
            color: "var(--color-midnight-lime)",
          }}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <h3
          className="text-sm font-bold"
          style={{ color: "var(--color-midnight-text)" }}
        >
          {group.label}
        </h3>
      </div>

      <p
        className="mt-2 text-xs leading-relaxed"
        style={{ color: "var(--color-midnight-muted)" }}
      >
        {group.description}
      </p>

      {/* Skill chips */}
      <ul
        className="mt-5 flex flex-wrap gap-2"
        aria-label={`${group.label} skills`}
      >
        {group.skills.map((skill) => (
          <li key={skill}>
            <span
              className="inline-block rounded-md border px-2.5 py-1 text-xs font-medium"
              style={
                isExploring
                  ? {
                      borderColor:
                        "color-mix(in srgb, var(--color-midnight-lime) 30%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--color-midnight-lime) 6%, transparent)",
                      color: "var(--color-midnight-lime)",
                    }
                  : {
                      borderColor: "var(--color-midnight-border)",
                      backgroundColor: "var(--color-midnight-bg)",
                      color: "var(--color-midnight-text)",
                    }
              }
            >
              {isExploring && (
                <span aria-hidden="true" className="mr-1 opacity-70">
                  ↗
                </span>
              )}
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

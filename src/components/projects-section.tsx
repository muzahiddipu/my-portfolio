import { ExternalLink, Sparkles } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  features: string[];
  accentColor: string;
}

const projects: Project[] = [
  {
    title: "Bangla Bulletin",
    tagline: "Modern Bilingual News Portal",
    description:
      "A responsive news publishing web application built with Next.js App Router, featuring category-driven news navigation, breaking headline tickers, and clean editorial layouts.",
    liveUrl: "https://bangla-bulletin.vercel.app/",
    githubUrl: "https://github.com/muzahiddipu/bangla-news-24",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    features: [
      "Categorized news navigation (Politics, World, Tech, Sports)",
      "Breaking news headline ticker / marquee",
      "Dynamic article grid & responsive editorial reading experience",
    ],
    accentColor: "#C8F169",
  },
  {
    title: "Book Vibe",
    tagline: "Personal Library & Book Discovery",
    description:
      "A book exploration and reading tracking platform created for avid readers to discover new titles, organize their reading list, and review reading statistics.",
    liveUrl: "https://book-vibe-project-zeta.vercel.app/",
    githubUrl: "https://github.com/muzahiddipu/book-vibe-project",
    tags: ["React", "Next.js", "Tailwind CSS", "UI/UX"],
    features: [
      "Curated book collection with detail views",
      "Personal reading list & library tracking",
      "Reading statistics visualization and responsive navigation",
    ],
    accentColor: "#C8F169",
  },
  {
    title: "Workout Planner (FitLog)",
    tagline: "Focused Exercise Library & Training Routine Planner",
    description:
      "A dedicated fitness companion application to explore multi-muscle exercises, build daily workout splits, and manage saved training routines.",
    liveUrl: "https://b-14-a06-fit-log-chi.vercel.app/",
    githubUrl: "https://github.com/muzahiddipu/B-14_A06_Fit-Log",
    tags: ["React", "Next.js", "Tailwind CSS", "Interactive State"],
    features: [
      "Targeted workout library filtered by muscle groups",
      "Daily training planner with save & calorie tracking",
      "Search & filtering with responsive high-contrast dark UI",
    ],
    accentColor: "#C8F169",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 border-t border-[#223561]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#223561] bg-[#172443] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C8F169]">
            <Sparkles className="h-3 w-3" />
            <span>Featured Work</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F3F5FA] sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#A7B3CC]">
            Hands-on web applications showcasing full-stack logic, modern component design, clean APIs, and responsive UI architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#223561] bg-[#172443] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C8F169]/50 hover:shadow-[0_12px_30px_rgba(16,26,53,0.8)]"
            >
              {/* Card Top: Browser Bar / Mockup Header */}
              <div>
                <div className="flex items-center justify-between border-b border-[#223561]/80 pb-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5C5C]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E5B54F]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C8F169]/80" />
                  </div>
                  <span className="max-w-[180px] truncate rounded bg-[#101A35] px-2.5 py-0.5 font-mono text-[10px] text-[#A7B3CC]">
                    {new URL(project.liveUrl).hostname}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C8F169]">
                    {project.tagline}
                  </span>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-[#F3F5FA] group-hover:text-[#C8F169] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A7B3CC]">
                    {project.description}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                <div className="mt-5 space-y-2 border-t border-[#223561]/60 pt-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#A7B3CC]">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8F169]" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Tech Stack & Actions */}
              <div className="mt-6 pt-5 border-t border-[#223561]/80">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#223561] bg-[#101A35] px-2 py-0.5 font-mono text-[11px] font-medium text-[#A7B3CC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8F169] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8F169]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#223561] bg-[#101A35] px-3 py-1.5 text-xs font-medium text-[#F3F5FA] transition-colors hover:border-[#C8F169]/50 hover:text-[#C8F169]"
                  >
                    <svg
                      className="h-3.5 w-3.5"
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
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

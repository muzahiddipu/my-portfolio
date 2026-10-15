import { Layers, Palette, Terminal, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: typeof Layers;
  skills: { name: string; level: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Frontend & Frameworks",
    description: "Technologies used daily in active project development",
    icon: Layers,
    skills: [
      { name: "React", level: "Component Architecture" },
      { name: "Next.js", level: "App Router & SSR/SSG" },
      { name: "JavaScript", level: "ES6+, Async, DOM" },
      { name: "TypeScript", level: "Typed Props & State" },
      { name: "HTML5 & Semantic Web", level: "Accessible Structure" },
      { name: "CSS3 & Modern Layouts", level: "Flexbox, Grid, Responsive" },
    ],
  },
  {
    title: "UI Design & Component Libraries",
    description: "Design systems, styling, and accessible component primitives",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: "Utility-First Styling" },
      { name: "shadcn/ui", level: "Custom Theme & Tokens" },
      { name: "Base UI", level: "Accessible Primitives" },
      { name: "Responsive Design", level: "Mobile-First UX" },
      { name: "Lucide React", level: "Consistent Iconography" },
    ],
  },
  {
    title: "Development Tools & Deployment",
    description: "Workflow tools and platform integrations",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Repositories & Collaboration" },
      { name: "Vercel", level: "Continuous Deployment" },
      { name: "npm", level: "Package Management" },
      { name: "VS Code", level: "Development Environment" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#223561]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#223561] bg-[#172443] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C8F169]">
            <Terminal className="h-3 w-3" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F3F5FA] sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#A7B3CC]">
            Verified technologies applied across live projects, organized by functional area without inflated claims.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="flex flex-col rounded-2xl border border-[#223561] bg-[#172443] p-6 shadow-xl transition-all duration-300 hover:border-[#C8F169]/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101A35] border border-[#223561] text-[#C8F169]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F3F5FA]">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-xs text-[#A7B3CC]">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-col gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-lg border border-[#223561]/70 bg-[#101A35]/80 px-3 py-2 text-xs"
                    >
                      <span className="font-medium text-[#F3F5FA]">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-[#A7B3CC]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

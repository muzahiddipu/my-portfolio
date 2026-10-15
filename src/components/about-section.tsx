import { BookOpen, GraduationCap, Lightbulb, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#223561]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#223561] bg-[#172443] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C8F169]">
              <Target className="h-3 w-3" />
              <span>Background & Philosophy</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F3F5FA] sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#A7B3CC]">
              I am an aspiring developer who believes in learning by building. Rather than just following tutorials, I focus on constructing real-world web applications that tackle real UI and data challenges.
            </p>

            <div className="mt-8 rounded-2xl border border-[#223561] bg-[#172443] p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101A35] border border-[#223561] text-[#C8F169]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F3F5FA]">Academic Background</h3>
                  <p className="text-xs text-[#A7B3CC]">Mathematics Education</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#A7B3CC]">
                My background in <strong className="text-[#F3F5FA] font-medium">Mathematics</strong> provides me with strong analytical reasoning, structured problem-solving discipline, and an affinity for clean algorithmic thinking in software development.
              </p>
            </div>
          </div>

          {/* Right Column: Values & Highlights */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-[#223561] bg-[#172443] p-6 shadow-md transition-all hover:border-[#C8F169]/40">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#101A35] border border-[#223561] text-[#C8F169]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F3F5FA]">Hands-on Execution</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#A7B3CC]">
                    Every project I work on—from bilingual news portals to gym planners—is an exercise in writing clean React components, managing state predictably, and designing intuitive user interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#223561] bg-[#172443] p-6 shadow-md transition-all hover:border-[#C8F169]/40">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#101A35] border border-[#223561] text-[#C8F169]">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F3F5FA]">Modern Frontend Standards</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#A7B3CC]">
                    I prioritize responsive layouts, accessibility best practices, keyboard navigation, and semantic HTML to ensure web experiences perform smoothly across all devices.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#223561] bg-[#172443] p-6 shadow-md transition-all hover:border-[#C8F169]/40">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#101A35] border border-[#223561] text-[#C8F169]">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F3F5FA]">Career Objective</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#A7B3CC]">
                    Actively seeking Junior Web Developer / Full-Stack Developer opportunities where I can contribute to high-impact products, learn from experienced engineering teams, and grow continuously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

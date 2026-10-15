import Image from "next/image";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background subtle radial gradient for depth */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(200,241,105,0.06)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Hero Copy */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#223561] bg-[#172443]/80 px-3.5 py-1.5 text-xs font-medium text-[#F3F5FA] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8F169] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C8F169]" />
              </span>
              <span>Available for Junior & Full-Stack Roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#F3F5FA] sm:text-5xl lg:text-6xl">
              Building for the web,{" "}
              <span className="text-[#C8F169]">with purpose.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A7B3CC] sm:text-lg">
              Hi, I&apos;m <strong className="font-semibold text-[#F3F5FA]">Dipu</strong>. I build modern, responsive web experiences with React, Next.js, and full-stack technologies. Passionate about clean code, practical problem solving, and intuitive UI.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#C8F169] px-6 text-sm font-semibold text-[#101A35] shadow-[0_2px_12px_rgba(200,241,105,0.2)] transition-all hover:bg-[#d4f582] hover:shadow-[0_4px_20px_rgba(200,241,105,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F169] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A35]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://github.com/muzahiddipu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#223561] bg-[#172443] px-5 text-sm font-medium text-[#F3F5FA] transition-all hover:border-[#C8F169]/50 hover:bg-[#1D2D54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F169]"
              >
                <svg
                  className="h-4 w-4 text-[#A7B3CC]"
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
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Quick Metrics / Signals */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#223561]/80 pt-8 sm:gap-10">
              <div>
                <p className="font-mono text-2xl font-bold text-[#F3F5FA]">3+</p>
                <p className="mt-1 text-xs text-[#A7B3CC]">Deployed Web Apps</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#C8F169]">100%</p>
                <p className="mt-1 text-xs text-[#A7B3CC]">Hands-on Focus</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-[#F3F5FA]">Math</p>
                <p className="mt-1 text-xs text-[#A7B3CC]">Analytical Rigor</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-2xl border border-[#223561] bg-[#172443] p-6 shadow-2xl shadow-black/40">
              {/* Card Header with Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#C8F169]/40 bg-[#101A35] shadow-md">
                  <Image
                    src="https://avatars.githubusercontent.com/u/193267315?v=4"
                    alt="Dipu profile"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-[#F3F5FA]">Dipu</h3>
                    <Sparkles className="h-3.5 w-3.5 text-[#C8F169]" />
                  </div>
                  <p className="text-xs text-[#A7B3CC]">Junior Web Developer</p>
                  <p className="mt-0.5 font-mono text-[11px] text-[#C8F169]">@muzahiddipu</p>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="mt-5 rounded-xl border border-[#223561]/80 bg-[#101A35] p-3.5 font-mono text-xs text-[#A7B3CC]">
                <div className="flex items-center justify-between pb-2 text-[10px] text-[#A7B3CC]/70 border-b border-[#223561]/60">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="h-3 w-3 text-[#C8F169]" />
                    <span>developer.config.ts</span>
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#C8F169]/80" />
                </div>
                <div className="space-y-1 pt-2.5 leading-relaxed">
                  <p>
                    <span className="text-[#C8F169]">const</span> focus = [
                  </p>
                  <p className="pl-4 text-[#F3F5FA]">&quot;Next.js App Router&quot;,</p>
                  <p className="pl-4 text-[#F3F5FA]">&quot;React & TypeScript&quot;,</p>
                  <p className="pl-4 text-[#F3F5FA]">&quot;Tailwind CSS&quot;,</p>
                  <p className="pl-4 text-[#F3F5FA]">&quot;Accessible Web UI&quot;</p>
                  <p>];</p>
                  <p className="pt-1 text-[#A7B3CC]/80">
                    <span className="text-[#C8F169]">status</span>: <span className="text-[#F3F5FA]">&quot;Ready to contribute&quot;</span>
                  </p>
                </div>
              </div>

              {/* Highlights bar */}
              <div className="mt-4 flex items-center justify-between rounded-lg bg-[#101A35]/60 px-3 py-2 text-xs text-[#A7B3CC]">
                <span className="flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-[#C8F169]" />
                  <span>Frontend / Full-Stack</span>
                </span>
                <span className="rounded bg-[#C8F169]/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#C8F169]">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 border-t border-[#223561]/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#223561] bg-[#172443] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#C8F169]/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#223561] bg-[#101A35] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C8F169]">
              <MessageSquare className="h-3 w-3" />
              <span>Let&apos;s Connect</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F3F5FA] sm:text-4xl">
              Open to Opportunities &amp; Collaboration
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#A7B3CC]">
              I am actively looking for Junior Web Developer and Full-Stack Developer positions. Whether you have an open role, want to discuss a project, or would like to review my code, I&apos;d love to connect!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/muzahiddipu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#C8F169] px-6 text-sm font-semibold text-[#101A35] transition-all hover:bg-[#d4f582] shadow-[0_2px_12px_rgba(200,241,105,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F169]"
              >
                <svg
                  className="h-4 w-4"
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
                <span>Follow on GitHub</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:contact@muzahiddipu.dev"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#223561] bg-[#101A35] px-5 text-sm font-medium text-[#F3F5FA] transition-colors hover:border-[#C8F169]/50 hover:text-[#C8F169]"
              >
                <Mail className="h-4 w-4 text-[#C8F169]" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

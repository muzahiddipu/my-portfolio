import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#223561]/80 bg-[#101A35] py-12 text-[#A7B3CC]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 font-bold tracking-tight text-[#F3F5FA] sm:justify-start"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#223561] bg-[#172443] font-mono text-xs font-semibold text-[#C8F169]">
              D
            </span>
            <span>
              Dipu<span className="text-[#C8F169]">.</span>
            </span>
          </Link>
          <p className="mt-2 text-xs text-[#A7B3CC]">
            Junior Web Developer &bull; Building purposeful web experiences.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#projects" className="transition-colors hover:text-[#F3F5FA]">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-[#F3F5FA]">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-[#F3F5FA]">
              Skills
            </a>
            <a href="#contact" className="transition-colors hover:text-[#F3F5FA]">
              Contact
            </a>
            <a
              href="https://github.com/muzahiddipu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8F169] transition-colors hover:underline"
            >
              GitHub
            </a>
          </div>

          <p className="text-xs text-[#A7B3CC]/80">
            &copy; {currentYear} Dipu. Built with Next.js, React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

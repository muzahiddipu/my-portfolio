"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

/**
 * EmailButton — shown only when an email address is provided.
 * Renders a mailto link with a clipboard copy button beside it.
 * "use client" is required here for useState (copy-confirmed state).
 */
export function EmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-stretch gap-1">
      {/* mailto link */}
      <a
        href={`mailto:${email}`}
        className="inline-flex h-11 items-center gap-2 rounded-l-lg border-y border-l px-5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          borderColor: "var(--color-midnight-border)",
          backgroundColor: "var(--color-midnight-surface)",
          color: "var(--color-midnight-text)",
          ["--tw-ring-color" as string]: "var(--color-midnight-lime)",
          ["--tw-ring-offset-color" as string]: "var(--color-midnight-bg)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor =
            "color-mix(in srgb, var(--color-midnight-lime) 40%, transparent)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.borderColor = "var(--color-midnight-border)";
        }}
      >
        <Mail
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
          style={{ color: "var(--color-midnight-lime)" }}
        />
        <span>{email}</span>
      </a>

      {/* Copy button */}
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-r-lg border-y border-r transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          borderColor: "var(--color-midnight-border)",
          backgroundColor: "var(--color-midnight-surface)",
          color: copied ? "var(--color-midnight-lime)" : "var(--color-midnight-muted)",
          ["--tw-ring-color" as string]: "var(--color-midnight-lime)",
          ["--tw-ring-offset-color" as string]: "var(--color-midnight-bg)",
        }}
        aria-label={copied ? "Email address copied" : "Copy email address to clipboard"}
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

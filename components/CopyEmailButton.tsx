"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/content";
import { CheckIcon, CopyIcon } from "./Icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  };

  return (
    <button type="button" className="btn btn--outline btn--sm" onClick={copy} aria-live="polite">
      {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      {copied ? contact.copied : contact.copy}
    </button>
  );
}

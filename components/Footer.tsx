import Link from "next/link";
import { footer, nav } from "@/lib/content";
import { instagramUrl } from "@/lib/site";
import { EagleMark } from "./EagleMark";
import { InstagramIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-black text-ivory">
      <div className="qilim-divider" aria-hidden="true" />
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
              <EagleMark className="h-8 w-8 text-red" />
              <span className="display text-lg text-ivory!">{nav.brand}</span>
            </Link>
            <p className="mt-3 max-w-[34ch] text-ivory/70">{footer.tagline}</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-ivory/85 hover:text-red"
            >
              <InstagramIcon size={18} />
              {footer.follow}
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block py-2 font-semibold text-ivory/85 hover:text-red">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-ivory/15 pt-6 text-sm text-ivory/60">{footer.copyright}</p>
      </div>
    </footer>
  );
}

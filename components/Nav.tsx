"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "@/lib/content";
import { EagleMark } from "./EagleMark";
import { CloseIcon, MenuIcon } from "./Icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="container flex items-center justify-between gap-4" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label="Learn Albanian with Debora — home">
          <EagleMark className="h-8 w-8 text-red" />
          <span className="display whitespace-nowrap text-[1.05rem] leading-tight sm:text-lg">{nav.brand}</span>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={nav.cta.href} className="btn btn--primary btn--sm hidden sm:inline-flex">
            {nav.cta.label}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="icon-btn lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="menu lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex items-center justify-between" style={{ height: "var(--nav-h)" }}>
            <span className="flex items-center gap-2.5">
              <EagleMark className="h-8 w-8 text-red" />
              <span className="display text-[1.05rem]">{nav.brand}</span>
            </span>
            <button ref={closeRef} type="button" className="icon-btn" aria-label="Close menu" onClick={close}>
              <CloseIcon size={22} />
            </button>
          </div>
          <ul className="mt-4 flex flex-col">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="menu__link" onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={nav.cta.href} className="btn btn--primary mt-8 w-full" onClick={close}>
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}

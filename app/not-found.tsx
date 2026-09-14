import type { Metadata } from "next";
import Link from "next/link";
import { EagleMark } from "@/components/EagleMark";
import { notFound } from "@/lib/content";

export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container flex flex-col items-center text-center">
        <EagleMark className="h-20 w-20 text-red" />
        <p className="display mt-6 text-[clamp(4rem,12vw,7rem)] leading-none">404</p>
        <h1 className="display h2 mt-2">{notFound.title}</h1>
        <p className="lead mt-4 text-muted">{notFound.text}</p>
        <Link href="/" className="btn btn--primary mt-8">
          {notFound.cta}
        </Link>
      </div>
    </section>
  );
}

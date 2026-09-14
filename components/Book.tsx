import { book } from "@/lib/content";
import { contactEmail } from "@/lib/site";
import { BookingChooser } from "./BookingChooser";

export function Book() {
  return (
    <section id="book" className="section" aria-labelledby="book-title">
      <div className="container">
        <div className="text-center">
          <h2 id="book-title" className="display h2">
            {book.heading}
          </h2>
          <p className="lead mx-auto mt-4 max-w-[36ch] text-muted">{book.subtext}</p>
        </div>

        <ol className="steps mt-10" aria-label="How it works">
          {book.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <div className="mt-10">
          <BookingChooser />
        </div>

        <p className="mt-6 text-center text-muted">
          {book.emailPrompt}{" "}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-red underline-offset-4 hover:underline">
            {contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}

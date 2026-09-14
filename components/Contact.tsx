import { contact } from "@/lib/content";
import { contactEmail, instagramHandle, instagramUrl, whatsappDisplay, whatsappUrl } from "@/lib/site";
import { CopyEmailButton } from "./CopyEmailButton";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="section--tight border-t border-(--line)" aria-labelledby="contact-title">
      <div className="container flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <h2 id="contact-title" className="display h3">
          {contact.heading}
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex min-h-11 items-center gap-2 text-lg font-semibold text-black underline-offset-4 hover:text-red hover:underline"
          >
            <MailIcon size={20} className="text-red" />
            {contactEmail}
          </a>
          <CopyEmailButton email={contactEmail} />
          <a
            href={whatsappUrl(contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${contact.whatsapp} ${whatsappDisplay}`}
            className="inline-flex min-h-11 items-center gap-2 text-lg font-semibold text-black underline-offset-4 hover:text-red hover:underline"
          >
            <WhatsAppIcon size={20} className="text-red" />
            {whatsappDisplay}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${contact.instagram} ${instagramHandle}`}
            className="inline-flex min-h-11 items-center gap-2 text-lg font-semibold text-black underline-offset-4 hover:text-red hover:underline"
          >
            <InstagramIcon size={20} className="text-red" />
            {instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}

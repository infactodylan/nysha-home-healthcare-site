import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Rosie Personal Care",
  description:
    "Request a conversation about private pay personal care, companionship, and scheduling.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="bg-hero-wash border-b border-base-300/60">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center lg:px-6 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk about the support you need
          </h1>
          <p className="mt-6 text-lg leading-relaxed opacity-90">
            Share a few details and we will follow up. If you prefer, you can
            also mention the best time to call and whether you are exploring
            care for yourself or a loved one.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-5 lg:px-6 lg:py-16">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">What happens next</h2>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed opacity-90">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                1
              </span>
              <span>
                We review your message and reach out to schedule a brief call.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                2
              </span>
              <span>
                We discuss private pay options and answer your questions with
                clarity—no pressure.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                3
              </span>
              <span>
                If it is a fit, we complete a needs assessment and set up a
                tailored care schedule.
              </span>
            </li>
          </ol>
          <p className="mt-8 text-sm leading-relaxed opacity-80">
            Email delivery uses SendGrid. Add{" "}
            <code className="rounded bg-base-200 px-1 py-0.5 text-xs">
              SENDGRID_API_KEY
            </code>
            ,{" "}
            <code className="rounded bg-base-200 px-1 py-0.5 text-xs">
              SENDGRID_FROM_EMAIL
            </code>
            , and{" "}
            <code className="rounded bg-base-200 px-1 py-0.5 text-xs">
              CONTACT_TO_EMAIL
            </code>{" "}
            to your environment for production.
          </p>
          <Link href="/services/personal-care" className="btn btn-outline btn-sm mt-6">
            Review personal care services
          </Link>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

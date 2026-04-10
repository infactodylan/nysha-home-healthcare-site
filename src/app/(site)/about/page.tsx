import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Nysha & Rosie Personal Care",
  description:
    "Learn how Rosie Personal Care Services began—with family, compassion, and CNA expertise since 2011.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="bg-hero-wash border-b border-base-300/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-6 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About us
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Rooted in family. Built on compassion.
          </h1>
          <p className="mt-6 text-lg leading-relaxed opacity-90">
            Rosie Personal Care Services exists because we have walked the hard
            parts of aging alongside someone we love—and we believe no one
            should navigate daily life feeling alone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 lg:px-6 lg:py-16">
        <div>
          <p className="text-lg leading-relaxed opacity-95">
            At Rosie Personal Care Services, we understand the struggle of
            elderly individuals who are unable to care for themselves. It is a
            deeply emotional battle filled with loneliness and overwhelm—a
            reminder that no one should have to face the daily challenges of
            life alone.
          </p>
          <p className="mt-6 text-lg leading-relaxed opacity-95">
            Our founder, Nysha, has always had a passion for helping seniors,
            nurtured by caring for her grandmother in her final years. She saw
            firsthand how hard it is when independence slips—and how hope
            returns when someone shows up with patience, skill, and heart.
            That experience became the spark to build an agency that assists
            with dressing, grooming, mobility, light housekeeping, and
            transportation—while filling the home with love, joy, and
            companionship.
          </p>
          <p className="mt-6 text-lg leading-relaxed opacity-95">
            Nysha is a Certified Nursing Assistant since 2011, licensed and
            insured. She believes every person deserves to feel valued—
            especially during vulnerable seasons. Clients who once hesitated to
            accept help often find themselves looking forward to visits,
            because care feels respectful, warm, and steady.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-box border border-base-300 bg-base-200/40 p-5 text-center">
            <p className="text-2xl font-bold text-primary">2011</p>
            <p className="mt-1 text-sm font-medium">CNA experience</p>
          </div>
          <div className="rounded-box border border-base-300 bg-base-200/40 p-5 text-center">
            <p className="text-2xl font-bold text-primary">Licensed</p>
            <p className="mt-1 text-sm font-medium">&amp; insured</p>
          </div>
          <div className="rounded-box border border-base-300 bg-base-200/40 p-5 text-center">
            <p className="text-2xl font-bold text-primary">You</p>
            <p className="mt-1 text-sm font-medium">Stay in the story</p>
          </div>
        </div>

        <div className="mt-14 rounded-box border border-primary/25 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold">Ready for a calmer next step?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed opacity-90">
            If you need personal care support, we are here to help. Start with
            a conversation about private pay options and a needs assessment—
            then we build a schedule that fits.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6 shadow-md">
            Contact us today
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Care Services",
  description:
    "Dressing, grooming, mobility, bathing support, and light housekeeping from a licensed CNA.",
};

const items = [
  {
    title: "Dressing & grooming",
    body: "Dignified assistance that preserves choice and comfort—at your pace, with respect for preferences and routines.",
  },
  {
    title: "Mobility & safety",
    body: "Steady support for moving around the home safely, reducing fall risk and building confidence for the day ahead.",
  },
  {
    title: "Bathing & personal hygiene",
    body: "Gentle, patient help when self-care feels overwhelming—many clients begin to feel relief (and even look forward to visits).",
  },
  {
    title: "Light housekeeping",
    body: "The small tasks that keep a home feeling calm: tidying, laundry help, and keeping spaces manageable.",
  },
] as const;

export default function PersonalCarePage() {
  return (
    <main className="flex-1">
      <section className="bg-hero-wash border-b border-base-300/60">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center lg:px-6 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Personal care with calm consistency
          </h1>
          <p className="mt-6 text-lg leading-relaxed opacity-90">
            When daily tasks become heavy, the right support can restore rhythm,
            dignity, and peace at home. We focus on what matters most to you—
            delivered by a CNA who has been serving seniors since 2011.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary shadow-md">
              Request care
            </Link>
            <Link
              href="/services/companion-care"
              className="btn btn-outline border-base-300"
            >
              Companion care
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="card border border-base-300 bg-base-100 shadow-md"
            >
              <div className="card-body">
                <h2 className="card-title text-lg">{item.title}</h2>
                <p className="text-sm leading-relaxed opacity-90">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-box border border-base-300 bg-base-200/40 p-8 lg:p-10">
          <h2 className="text-2xl font-bold">A simple path to the right plan</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-90">
            We begin with a conversation about private pay options, follow with
            a thorough needs assessment, and then set up a personalized
            schedule—so care feels predictable, kind, and aligned with your
            goals.
          </p>
          <Link href="/contact" className="btn btn-primary mt-6">
            Speak with us
          </Link>
        </div>
      </section>
    </main>
  );
}

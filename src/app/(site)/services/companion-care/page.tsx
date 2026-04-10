import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Companion Care Services",
  description:
    "Warm companionship, conversation, outings, and meaningful connection for seniors at home.",
};

const highlights = [
  {
    title: "Conversation & connection",
    body: "Friendly presence that eases loneliness—whether it is sharing stories, playing cards, or simply being nearby.",
  },
  {
    title: "Outings & appointments",
    body: "Support for transportation and accompaniment so errands, visits, and community time feel possible again.",
  },
  {
    title: "Meaningful routines",
    body: "Help structuring the day in ways that feel purposeful—meals, movement, hobbies, and rest—without losing independence.",
  },
  {
    title: "Family peace of mind",
    body: "Reliable visits that reduce worry for loved ones, with communication that honors privacy and dignity.",
  },
] as const;

export default function CompanionCarePage() {
  return (
    <main className="flex-1">
      <section className="bg-hero-wash border-b border-base-300/60">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center lg:px-6 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Companionship that brightens the day
          </h1>
          <p className="mt-6 text-lg leading-relaxed opacity-90">
            Loneliness can weigh as much as any physical task. Our companion
            care focuses on warmth, trust, and steady presence—so home feels
            alive again.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary shadow-md">
              Plan a visit
            </Link>
            <Link
              href="/services/personal-care"
              className="btn btn-outline border-base-300"
            >
              Personal care
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="card border border-base-300 bg-base-100 shadow-md"
            >
              <div className="card-body">
                <h2 className="card-title text-lg">{h.title}</h2>
                <p className="text-sm leading-relaxed opacity-90">{h.body}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 rounded-box border-l-4 border-primary bg-base-200/50 p-8 text-lg font-medium leading-relaxed">
          &ldquo;Rosie truly made a difference in my life. I feel seen and cared
          for.&rdquo;
          <footer className="mt-3 text-sm font-normal opacity-70">
            — Satisfied client
          </footer>
        </blockquote>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/about" className="btn btn-outline border-base-300">
            Meet Nysha
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}

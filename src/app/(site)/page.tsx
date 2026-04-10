import Link from "next/link";

const stakes = [
  "Increased feelings of isolation",
  "Challenging daily routines",
  "Risk of health complications",
  "Difficulty with mobility",
  "Inability to manage personal care",
  "Limited access to transportation",
  "Household tasks remain undone",
  "Stress for family caregivers",
] as const;

const benefits = [
  {
    title: "Tailored personal care",
    body: "Support shaped around dressing, grooming, mobility, and light housekeeping—so daily life feels manageable again.",
  },
  {
    title: "Friendly companionship",
    body: "Warm, consistent presence that brightens the day and eases loneliness at home.",
  },
  {
    title: "CNA expertise you can trust",
    body: "Certified Nursing Assistant since 2011, licensed and insured—care rooted in skill and heart.",
  },
  {
    title: "Flexible scheduling",
    body: "Visits that respect your routine, your family, and the pace that feels right for you.",
  },
] as const;

const steps = [
  {
    step: "1",
    title: "Speak with a case manager",
    body: "Discuss private pay options and what support could look like for you or your loved one.",
  },
  {
    step: "2",
    title: "Undergo a needs assessment",
    body: "Together we clarify priorities so care is personal—not generic.",
  },
  {
    step: "3",
    title: "Set up your care schedule",
    body: "A plan you understand, with room to adjust as needs change.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="bg-hero-wash border-b border-base-300/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-6 lg:py-24">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Rosie Personal Care Services
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-base-content sm:text-5xl lg:text-[3.25rem]">
              Compassionate care that empowers independence
            </h1>
            <p className="max-w-xl text-lg leading-relaxed opacity-90">
              Are you or a loved one feeling overwhelmed at home? You should
              not have to struggle with daily activities alone—we bring
              skillful personal care and genuine companionship so life feels
              lighter, safer, and more connected.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary btn-lg shadow-lg">
                Contact us today
              </Link>
              <Link
                href="/services/personal-care"
                className="btn btn-outline btn-lg border-base-300"
              >
                Explore services
              </Link>
            </div>
            <p className="text-sm opacity-70">
              Private pay · Needs-based planning · Serving seniors who want
              dignity, warmth, and reliable support
            </p>
          </div>
          <div className="card flex-1 border border-base-300 bg-base-100/80 shadow-2xl backdrop-blur-sm">
            <div className="card-body gap-4">
              <h2 className="card-title text-xl">Support that feels like family</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Many people feel overwhelmed and lonely when they cannot care
                for themselves the way they used to. We help with dressing,
                grooming, mobility, transportation, and light
                housekeeping—so you can enjoy more independence while your
                family rests easier.
              </p>
              <div className="divider my-0" />
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ✓
                  </span>
                  <span>CNA since 2011 · Licensed &amp; insured</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ✓
                  </span>
                  <span>Personalized plans &amp; flexible visits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ✓
                  </span>
                  <span>Empathy-first approach—no judgment, just care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Don&apos;t face daily tasks alone
          </h2>
          <p className="mt-4 text-lg opacity-90">
            When assistance at home is hard to keep up with, small gaps can
            grow—emotionally and physically. Naming the struggle is the first
            step toward relief.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stakes.map((item) => (
            <li
              key={item}
              className="rounded-box border border-base-300 bg-base-200/40 px-4 py-4 text-sm font-medium leading-snug shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="btn btn-primary btn-wide shadow-md">
            Get started
          </Link>
        </div>
      </section>

      <section className="border-y border-base-300 bg-base-200/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Rediscover joy and independence
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Experience support that truly feels like family—steady, kind, and
              built around your real life at home.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="card border border-base-300 bg-base-100 shadow-md"
              >
                <div className="card-body">
                  <h3 className="card-title text-lg">{b.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              We understand your challenges
            </h2>
            <p className="mt-4 text-lg leading-relaxed opacity-90">
              Asking for help can feel daunting. We get it—and we are here to
              listen, not rush you. Our team is dedicated to providing the care
              you need with respect for your story and your pace.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-box border border-primary/20 bg-primary/5 p-5">
                <p className="font-semibold text-primary">Certified Nursing Assistant</p>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  Compassionate support from a licensed professional who knows
                  how to keep you safe and comfortable.
                </p>
              </div>
              <div className="rounded-box border border-base-300 bg-base-200/50 p-5">
                <p className="font-semibold">Trusted since 2011</p>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  Over a decade of experience helping seniors feel seen, valued,
                  and cared for at home.
                </p>
              </div>
            </div>
            <figure className="mt-10 rounded-box border border-base-300 bg-base-100 p-6 shadow-sm">
              <blockquote className="text-lg font-medium leading-relaxed">
                &ldquo;Rosie truly made a difference in my life. I feel seen and
                cared for.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm opacity-70">
                — Satisfied client
              </figcaption>
            </figure>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              3 simple steps to get started
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Easily step into a more supported life—clear, calm, and guided.
            </p>
            <ul className="mt-8 space-y-4">
              {steps.map((s) => (
                <li
                  key={s.step}
                  className="flex gap-4 rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content"
                    aria-hidden
                  >
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed opacity-90">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn btn-primary btn-block mt-8 shadow-md"
            >
              Contact me today
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-base-300 bg-primary text-primary-content">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center lg:px-6 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            You&apos;re not alone in this journey
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed opacity-95">
            At Rosie Personal Care Services, we specialize in compassionate care
            that helps you maintain independence while reducing loneliness. We
            work closely with you and your family to create a personalized care
            plan—so daily needs are met and you feel valued every step of the
            way.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn btn-lg border-0 bg-primary-content text-primary shadow-lg hover:bg-base-100"
            >
              Contact us today
            </Link>
            <Link
              href="/about"
              className="btn btn-lg btn-outline border-primary-content/40 text-primary-content hover:border-primary-content hover:bg-primary-content/10 hover:text-primary-content"
            >
              Meet Nysha
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

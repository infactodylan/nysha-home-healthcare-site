import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-base-300 bg-base-200/50">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-primary">
              Rosie Personal Care Services
            </p>
            <p className="max-w-sm text-sm leading-relaxed opacity-90">
              Compassionate personal care that empowers independence and
              provides companionship—trusted CNA support since 2011.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/personal-care" className="link link-hover">
                  Personal care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/companion-care"
                  className="link link-hover"
                >
                  Companion care
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="link link-hover">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link link-hover">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">
              Get in touch
            </p>
            <p className="text-sm leading-relaxed opacity-90">
              Ready to speak with a case manager about private pay options? We
              are here to help you or your loved one feel supported at home.
            </p>
            <Link href="/contact" className="btn btn-outline btn-primary btn-sm mt-4">
              Contact us
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-base-300 pt-8 text-center text-xs opacity-70 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Rosie Personal Care Services. Licensed
            and insured.
          </p>
          <p>CNA since 2011 · Personalized care plans · Flexible scheduling</p>
        </div>
      </div>
    </footer>
  );
}

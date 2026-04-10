export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Nysha Home Healthcare</a>
        </div>
        <div className="flex-none">
          <a className="btn btn-primary btn-sm">Get in touch</a>
        </div>
      </div>

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16">
        <div className="card bg-base-200 w-full max-w-lg shadow-xl">
          <div className="card-body items-center text-center">
            <h1 className="card-title text-2xl">Next.js + daisyUI</h1>
            <p>
              Styling is powered by{" "}
              <a
                className="link link-primary"
                href="https://daisyui.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                daisyUI
              </a>{" "}
              on Tailwind CSS v4. Edit{" "}
              <code className="rounded bg-base-300 px-1 py-0.5 text-sm">
                src/app/page.tsx
              </code>{" "}
              to build your pages.
            </p>
            <div className="card-actions justify-end">
              <a
                className="btn btn-outline btn-sm"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js docs
              </a>
              <a
                className="btn btn-primary btn-sm"
                href="https://daisyui.com/components/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Component library
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

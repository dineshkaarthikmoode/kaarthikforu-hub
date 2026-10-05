import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LinkButton } from "@/components/ui/Button";
import { FINDS_NAME, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site-config";
import { ArrowRight, Laptop, Map, BookOpen, Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech resources & honest product picks",
  description:
    "KaarthikForU Hub — practical laptop recommendations, developer resources, roadmaps, and career guides. Start with curated laptop picks.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: SITE_NAME,
    description: SITE_TAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

const comingSoonSections = [
  {
    icon: BookOpen,
    title: "Resources",
    description: "Tools, links, and references for developers.",
  },
  {
    icon: Map,
    title: "Roadmaps",
    description: "Java, SQL, DSA, AI, and structured learning paths.",
  },
  {
    icon: Briefcase,
    title: "Portfolio",
    description: "Projects and work from KaarthikForU.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-orange">
                KaarthikForU
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-text sm:text-5xl">
                {SITE_NAME}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Your hub for useful tech resources, honest product recommendations,
                career guidance, and developer-focused content — built to grow with
                the channel.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/laptops" className="gap-2 px-6">
                  {FINDS_NAME} — Laptop picks
                  <ArrowRight size={18} aria-hidden />
                </LinkButton>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3 text-primary">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Laptop size={22} aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-text">Live now</p>
                  <p className="text-sm text-muted">Laptop catalogue with filters</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                One page, combinable budget and use-case filters, sorting, editor&apos;s
                pick, and clear Amazon CTAs — optimized for mobile visitors from
                Instagram and YouTube.
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="coming-soon-heading">
            <h2
              id="coming-soon-heading"
              className="text-xl font-bold text-text sm:text-2xl"
            >
              More sections coming soon
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              The site architecture is ready for roadmaps, guides, and portfolio —
              only laptops are fully built in this first release.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {comingSoonSections.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="rounded-xl border border-dashed border-border bg-card/80 p-5"
                >
                  <Icon
                    className="text-muted"
                    size={22}
                    aria-hidden
                  />
                  <h3 className="mt-3 font-semibold text-text">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{description}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                    Coming soon
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

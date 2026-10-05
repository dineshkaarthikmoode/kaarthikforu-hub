import { buyingGuideTopics } from "@/lib/buying-guide-content";

export function BuyingGuide() {
  return (
    <section
      aria-labelledby="buying-guide-heading"
      className="mt-8 rounded-[10px] border border-border bg-card p-4 sm:mt-10 sm:p-5"
    >
      <h2
        id="buying-guide-heading"
        className="text-[16px] font-semibold text-text"
      >
        How to choose the right laptop
      </h2>
      <p className="mt-1 max-w-2xl text-[13px] font-normal leading-relaxed text-muted">
        Short guidance by use case — expand into full guides on KaarthikForU Hub
        later.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {buyingGuideTopics.map((topic) => (
          <article
            key={topic.id}
            className="rounded-lg border border-border bg-surface px-3 py-3"
          >
            <h3 className="text-[13px] font-medium text-text">{topic.title}</h3>
            <p className="mt-1.5 text-[13px] font-normal leading-relaxed text-muted">
              {topic.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

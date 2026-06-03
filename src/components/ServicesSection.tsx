import { content } from '../content';

export default function ServicesSection() {
  return (
    <section id="solutions" className="section-padding bg-white text-ink">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">
            Как <span className="font-bold">AI Service Lab</span> помогает бизнесу
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {content.solutions.text}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.solutions.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
                →
              </div>

              <h3 className="text-xl font-bold text-slate-950">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

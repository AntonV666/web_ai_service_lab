import { content } from '../content';

export default function ProblemSection() {
  return (
    <section id="features" className="section-padding bg-slate-950 text-white">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title text-white">{content.problem.title}</h2>

          <p className="mt-6 text-lg text-slate-300">
            {content.problem.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.problem.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-lg font-bold text-white">{card.title}</h3>

              <p className="mt-4 leading-7 text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center">
          <p className="text-2xl font-light leading-relaxed text-white sm:text-3xl">
            Современный бизнес должен развиваться, а не тратить ресурсы на
            рутинные операции.
          </p>

          <p className="mt-4 text-slate-300">
            Мы помогаем автоматизировать процессы, запускать новые каналы продаж
            и создавать удобную цифровую инфраструктуру для бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
}

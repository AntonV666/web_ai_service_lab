import { content } from '../content';

export default function HowItWorksSection() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">
            Как начинается работа
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Мы стараемся сделать внедрение решений понятным и прозрачным для бизнеса.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {content.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

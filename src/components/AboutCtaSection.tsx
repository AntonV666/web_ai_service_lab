import { content } from '../content';

type AboutCtaSectionProps = {
  onOpenContact: () => void;
};

export default function AboutCtaSection({
  onOpenContact,
}: AboutCtaSectionProps) {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-page">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              AI Service Lab
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              {content.about.title}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-700">
              {content.about.text}
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              {content.about.subtitle}
            </p>
          </div>
        </div>

        <div
          id="contacts"
          className="mt-12 grid items-center gap-8 rounded-3xl bg-slate-950 p-8 text-white lg:grid-cols-[1fr_auto] lg:p-12"
        >
          <div>
            <h3 className="text-3xl font-black sm:text-4xl">
              {content.about.ctaTitle}
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              {content.about.ctaText}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={onOpenContact}
              className="btn btn-light justify-center"
            >
              {content.about.ctaButton}
            </button>

            <a
              href={content.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline justify-center"
            >
              {content.about.secondaryButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

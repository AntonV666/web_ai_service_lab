import { reachGoal } from '../analytics';
import { content } from '../content';

type HeroSectionProps = {
  onOpenContact: () => void;
};

export default function HeroSection({
  onOpenContact,
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-20 text-white">
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hero-business-dashboard.png"
          alt="Business automation dashboard"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/0" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />

      <div className="container-page flex min-h-[calc(100vh-80px)] items-center py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 backdrop-blur">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-7 text-4xl font-black leading-[1.02] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)] sm:text-6xl lg:text-6xl">
            {content.hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:text-xl">
            {content.hero.text}
          </p>

          {content.hero.note && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              {content.hero.note}
            </p>
          )}

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#products"
              onClick={() => reachGoal('products_click')} 
              className="rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              {content.hero.secondaryCta}
            </a>

            <button
              onClick={onOpenContact}
              className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              {content.hero.primaryCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

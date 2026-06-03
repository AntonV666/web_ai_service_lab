import { content } from '../content';

type HeaderProps = {
  onOpenContact: () => void;
};

export default function Header({
  onOpenContact,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-5">

        <a
          href="#hero"
          className="flex items-center gap-3"
        >
          <img
            src="/images/logo/ai-service-lab-logo.png"
            alt="AI Service Lab"
            className="h-14 w-auto"
          />

          <span className="text-base font-black tracking-wide text-slate-950">
            AI Service Lab
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onOpenContact}
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-glow"
        >
          Получить консультацию
        </button>

      </div>
    </header>
  );
}

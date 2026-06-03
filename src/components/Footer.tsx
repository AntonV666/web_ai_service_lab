import { reachGoal } from '../analytics';
import { content } from '../content';

type FooterProps = {
  onOpenContact: () => void;
};

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-slate-950 py-16 text-white">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
              <a
                href="#hero"
                className="inline-flex items-center gap-3"
              >
                <span className="text-2xl font-black text-white">
                  AI Service Lab
                </span>
              </a>

              <p className="mt-4 leading-7 text-slate-400">
                {content.footer.description}
              </p>
            </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
              Навигация
            </h4>

            <nav className="mt-4 flex flex-col gap-3">
              {content.footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
              Продукты
            </h4>

            <nav className="mt-4 flex flex-col items-start gap-3">
              <a
                href="https://ai-service-lab.ru/mini-shop/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => reachGoal('mini_shop_click')}
                className="text-slate-400 transition hover:text-white"
              >
                Mini Shop SaaS
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="text-left text-slate-400 transition hover:text-white"
              >
                Ready Mini Shop
              </button>

              <button
                type="button"
                onClick={onOpenContact}
                className="text-left text-slate-400 transition hover:text-white"
              >
                Custom Mini Shop
              </button>

              <button
                type="button"
                onClick={onOpenContact}
                className="text-left text-slate-400 transition hover:text-white"
              >
                Сайт для бизнеса
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
              Документы
            </h4>

            <nav className="mt-4 flex flex-col gap-3">
              {content.footer.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
              Контакты
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={content.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => reachGoal('telegram_click')}
                className="text-slate-400 transition hover:text-white"
              >
                {content.footer.contacts.telegram}
              </a>

              <span className="text-slate-400">
                {content.footer.contacts.email}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">
          {content.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

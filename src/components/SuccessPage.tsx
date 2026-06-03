import { useEffect } from 'react';

import { reachGoal } from '../analytics';
import { content } from '../content';

export default function SuccessPage() {
  useEffect(() => {
    reachGoal('contact_form_success');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur md:p-12">
        <p className="mb-4 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-100">
          Заявка отправлена
        </p>

        <h1 className="text-4xl font-black md:text-5xl">
          Спасибо! Мы получили ваше обращение.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
          Мы свяжемся с вами по указанному контакту. Если вопрос срочный, можно написать напрямую в Telegram.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/"
            className="rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Вернуться на сайт
          </a>

          <a
            href={content.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

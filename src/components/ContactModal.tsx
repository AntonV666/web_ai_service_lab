import { useEffect } from 'react';

import { reachGoal } from '../analytics';

import { content } from '../content';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-950">
              Получить консультацию
            </h2>

            <p className="mt-3 text-slate-600">
              Расскажите о вашей задаче. Мы свяжемся с вами.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть форму"
            className="text-2xl text-slate-400 hover:text-slate-900"
          >
            ×
          </button>
        </div>

        <form
          action="https://formsubmit.co/support@ai-service-lab.ru"
          method="POST"
          className="mt-8 space-y-5"
          onSubmit={() => reachGoal('contact_form_submit')}
        >
          <input
            type="hidden"
            name="_subject"
            value="Новая заявка с сайта AI Service Lab"
          />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://ai-service-lab.ru/success" />

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Имя или компания
            </label>

            <input
              required
              name="company"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Название компании или Ваше имя"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Контакт для связи
            </label>

            <input
              required
              name="contact"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Telegram, Email или телефон"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Описание задачи
            </label>

            <textarea
              required
              name="message"
              rows={5}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Опишите задачу или проект"
            />
          </div>

          <label className="flex gap-3 text-sm leading-6 text-slate-600">
            <input
              required
              type="checkbox"
              name="personal_data_consent"
              value="accepted"
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300"
            />
            <span>
              Нажимая кнопку «Отправить заявку», я соглашаюсь с{' '}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Политикой конфиденциальности
              </a>{' '}
              и даю{' '}
              <a
                href="/personal-data"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                согласие на обработку персональных данных
              </a>
              .
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Отправить заявку
          </button>

          <p className="text-center text-xs leading-5 text-slate-400">
            Ответ придёт на указанный вами контакт. Также можно написать напрямую в{' '}
            <a
              href={content.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Telegram
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

import { FormEvent, useEffect, useState } from 'react';

import { reachGoal } from '../analytics';
import { sendContactForm } from '../contactApi';
import { content } from '../content';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const formData = new FormData(event.currentTarget);

    const payload = {
      company: String(formData.get('company') || '').trim(),
      contact: String(formData.get('contact') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      personal_data_consent: formData.get('personal_data_consent') === 'accepted',
    };

    setError('');
    setIsSubmitting(true);

    try {
      await sendContactForm(payload);

      reachGoal('contact_form_submit');

      window.location.href = '/success';
    } catch (err) {
      console.error(err);
      setError(
        'Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз или напишите нам в Telegram.',
      );
      setIsSubmitting(false);
    }
  }

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

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? 'Отправляем заявку...' : 'Отправить заявку'}
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

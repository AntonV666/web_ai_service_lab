import { FormEvent, useEffect, useState } from 'react';

import { reachGoal } from '../analytics';
import { sendContactForm } from '../contactApi';
import { content } from '../content';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

  const isSubmitting = status === 'submitting';

  function handleClose() {
    setStatus('idle');
    setError('');
    onClose();
  }

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      company: String(formData.get('company') || '').trim(),
      contact: String(formData.get('contact') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      personal_data_consent: formData.get('personal_data_consent') === 'accepted',
    };

    setError('');
    setStatus('submitting');

    try {
      await sendContactForm(payload);

      try {
        reachGoal('contact_form_submit');
      } catch {
        // Analytics must not break lead form UX.
      }

      form.reset();
      setError('');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setError(
        'Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз или напишите нам в Telegram.',
      );
      setStatus('error');
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-white p-8 text-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
              AI Service Lab
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              {status === 'success'
                ? 'Спасибо! Мы получили ваше обращение.'
                : 'Получить консультацию'}
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {status === 'success'
                ? 'Мы свяжемся с вами по указанному контакту. Если вопрос срочный, можно написать напрямую в Telegram.'
                : 'Расскажите о вашей задаче. Мы свяжемся с вами.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Закрыть форму"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-600 transition hover:border-blue-600 hover:text-blue-600"
          >
            ×
          </button>
        </div>

        {status === 'success' ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-blue-600"
            >
              Вернуться на сайт
            </button>

            <a
              href={content.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-7 py-4 text-center text-sm font-black text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              Написать в Telegram
            </a>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';

const COOKIE_NOTICE_KEY = 'ai_service_lab_cookie_notice_accepted';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(localStorage.getItem(COOKIE_NOTICE_KEY) !== 'true');
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_NOTICE_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[120] mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl md:flex md:items-center md:justify-between md:gap-6">
      <p className="text-sm leading-6 text-slate-600">
        Мы используем cookie и аналитические сервисы для улучшения работы сайта.
      </p>

      <button
        type="button"
        onClick={acceptCookies}
        className="mt-4 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 md:mt-0 md:w-auto"
      >
        Принять
      </button>
    </div>
  );
}

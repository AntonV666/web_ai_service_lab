import { useEffect, useState } from 'react';

import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  saveCookieConsent,
} from '../analytics';

type CookieNoticeProps = {
  settingsOpenSignal?: number;
};

export default function CookieNotice({ settingsOpenSignal = 0 }: CookieNoticeProps) {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    setIsBannerVisible(!consent);
    setAnalyticsEnabled(consent?.analytics === true);

    const handleConsentChange = () => {
      const updatedConsent = getCookieConsent();
      setIsBannerVisible(!updatedConsent);
      setAnalyticsEnabled(updatedConsent?.analytics === true);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (settingsOpenSignal > 0) {
      const consent = getCookieConsent();
      setAnalyticsEnabled(consent?.analytics === true);
      setIsSettingsOpen(true);
      setIsBannerVisible(false);
    }
  }, [settingsOpenSignal]);

  const acceptAll = () => {
    saveCookieConsent('all', true);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  };

  const acceptNecessaryOnly = () => {
    saveCookieConsent('necessary_only', false);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  };

  const saveCustomSettings = () => {
    saveCookieConsent('custom', analyticsEnabled);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div className="fixed bottom-4 left-4 right-4 z-[120] mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="text-sm font-bold text-slate-900">
              Настройки cookies
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Мы используем необходимые cookies для работы сайта и, с вашего согласия, аналитические cookies Яндекс Метрики для улучшения сайта.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 md:mt-0 md:min-w-[420px] md:flex-row md:justify-end">
            <button
              type="button"
              onClick={acceptNecessaryOnly}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-500 hover:bg-slate-50"
            >
              Только необходимые
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSettingsOpen(true);
                setIsBannerVisible(false);
              }}
              className="rounded-xl border border-blue-200 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Настроить
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Принять
            </button>
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-7 shadow-2xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                  AI Service Lab
                </p>
                <h2 className="mt-3 text-3xl font-black text-slate-950">
                  Настройки cookies
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Вы можете разрешить только необходимые cookies или дополнительно включить аналитику Яндекс Метрики.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                aria-label="Закрыть настройки cookies"
                className="text-2xl text-slate-400 hover:text-slate-900"
              >
                ×
              </button>
            </div>

            <div className="mt-7 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-lg font-black text-slate-950">
                      Необходимые cookies
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Нужны для корректной работы сайта и сохранения вашего выбора по cookies. Эта категория всегда включена.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                    Всегда включены
                  </span>
                </div>
              </div>

              <label className="block cursor-pointer rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-lg font-black text-slate-950">
                      Аналитические cookies
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Яндекс Метрика, Вебвизор, карты кликов, карты скроллинга и аналитика форм. Помогают понимать, как посетители используют сайт.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300"
                  />
                </div>
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={acceptNecessaryOnly}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-500 hover:bg-slate-50"
              >
                Только необходимые
              </button>
              <button
                type="button"
                onClick={saveCustomSettings}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Сохранить настройки
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

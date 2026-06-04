declare global {
  interface Window {
    ym?: {
      (counterId: number, method: string, ...params: unknown[]): void;
      a?: unknown[];
      l?: number;
    };
  }
}

export type CookieConsentMode = 'necessary_only' | 'all' | 'custom';

export type CookieConsent = {
  mode: CookieConsentMode;
  analytics: boolean;
  updatedAt: string;
};

export const YM_COUNTER_ID = Number(import.meta.env.VITE_YANDEX_METRIKA_ID || 109616233);
export const COOKIE_CONSENT_KEY = 'ai_service_lab_cookie_consent';
export const COOKIE_CONSENT_EVENT = 'ai-service-lab-cookie-consent-changed';

let yandexMetrikaLoading = false;
let yandexMetrikaInitialized = false;

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;

  const rawValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!rawValue) return null;

  try {
    const parsed = JSON.parse(rawValue) as Partial<CookieConsent>;

    if (
      (parsed.mode === 'necessary_only' || parsed.mode === 'all' || parsed.mode === 'custom') &&
      typeof parsed.analytics === 'boolean'
    ) {
      return {
        mode: parsed.mode,
        analytics: parsed.analytics,
        updatedAt: parsed.updatedAt || new Date().toISOString(),
      };
    }
  } catch {
    return null;
  }

  return null;
}

export function hasAnalyticsConsent() {
  return getCookieConsent()?.analytics === true;
}

export function saveCookieConsent(mode: CookieConsentMode, analytics: boolean) {
  if (typeof window === 'undefined') return;

  const consent: CookieConsent = {
    mode,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent<CookieConsent>(COOKIE_CONSENT_EVENT, { detail: consent }));
}

export function loadYandexMetrika() {
  if (
    !YM_COUNTER_ID ||
    typeof window === 'undefined' ||
    typeof document === 'undefined' ||
    !hasAnalyticsConsent() ||
    yandexMetrikaInitialized ||
    yandexMetrikaLoading
  ) {
    return;
  }

  yandexMetrikaLoading = true;

  window.ym =
    window.ym ||
    function ymStub(...args: unknown[]) {
      (window.ym!.a = window.ym!.a || []).push(args);
    };

  window.ym.l = Date.now();

  if (!document.querySelector('script[src="https://mc.yandex.ru/metrika/tag.js"]')) {
    const firstScript = document.getElementsByTagName('script')[0];
    const metrikaScript = document.createElement('script');

    metrikaScript.async = true;
    metrikaScript.src = 'https://mc.yandex.ru/metrika/tag.js';
    firstScript.parentNode?.insertBefore(metrikaScript, firstScript);
  }

  window.ym(YM_COUNTER_ID, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });

  yandexMetrikaInitialized = true;
  yandexMetrikaLoading = false;
}

export function reachGoal(goal: string) {
  if (
    !YM_COUNTER_ID ||
    typeof window === 'undefined' ||
    !hasAnalyticsConsent() ||
    typeof window.ym !== 'function'
  ) {
    return;
  }

  window.ym(YM_COUNTER_ID, 'reachGoal', goal);
}

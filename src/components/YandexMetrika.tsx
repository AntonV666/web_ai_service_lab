import { useEffect } from 'react';

import { COOKIE_CONSENT_EVENT, loadYandexMetrika } from '../analytics';

export default function YandexMetrika() {
  useEffect(() => {
    loadYandexMetrika();

    const handleConsentChange = () => {
      loadYandexMetrika();
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  return null;
}

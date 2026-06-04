import { useEffect } from 'react';

import { YM_COUNTER_ID } from '../analytics';

export default function YandexMetrika() {
  useEffect(() => {
    if (!YM_COUNTER_ID || typeof window === 'undefined') return;

    if (document.querySelector(`script[data-ym-counter="${YM_COUNTER_ID}"]`)) {
      return;
    }

    window.ym =
      window.ym ||
      function (...args: unknown[]) {
        (window.ym!.a = window.ym!.a || []).push(args);
      };

    window.ym.l = Number(new Date());

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}`;
    script.dataset.ymCounter = String(YM_COUNTER_ID);

    document.head.appendChild(script);

    window.ym(YM_COUNTER_ID, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    });
  }, []);

  if (!YM_COUNTER_ID) return null;

  return (
    <noscript>
      <div>
        <img
          src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </noscript>
  );
}

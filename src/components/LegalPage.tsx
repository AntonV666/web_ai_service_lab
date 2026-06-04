import type { ReactNode } from 'react';

type LegalPageProps = {
  variant: 'privacy' | 'personal-data' | 'cookie-policy';
};

const updatedAt = '04 июня 2026 года';
const supportEmail = 'support@ai-service-lab.ru';

function BackLink() {
  return (
    <a
      href="/"
      className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
    >
      ← На главную
    </a>
  );
}

export default function LegalPage({ variant }: LegalPageProps) {
  const title = {
    privacy: 'Политика конфиденциальности',
    'personal-data': 'Согласие на обработку персональных данных',
    'cookie-policy': 'Политика использования cookie',
  }[variant];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-page flex h-20 items-center justify-between gap-5">
          <a href="/" className="text-base font-black tracking-wide text-slate-950">
            AI Service Lab
          </a>
          <BackLink />
        </div>
      </header>

      <main className="section-padding">
        <article className="container-page max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            AI Service Lab
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950">
            {title}
          </h1>
          <p className="mt-4 text-slate-500">Дата обновления: {updatedAt}</p>

          {variant === 'privacy' && <PrivacyPolicy />}
          {variant === 'personal-data' && <PersonalDataConsent />}
          {variant === 'cookie-policy' && <CookiePolicy />}
        </article>
      </main>
    </div>
  );
}

function LegalHeading({ children }: { children: string }) {
  return <h2 className="mt-10 text-2xl font-black text-slate-950">{children}</h2>;
}

function LegalText({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-8 text-slate-700">{children}</p>;
}

function LegalList({ children }: { children: ReactNode }) {
  return <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">{children}</ul>;
}

function PrivacyPolicy() {
  return (
    <>
      <LegalText>
        Настоящая Политика конфиденциальности описывает, как сайт AI Service Lab обрабатывает персональные данные пользователей, которые оставляют заявку через форму обратной связи, переходят по контактным ссылкам или взаимодействуют с сайтом.
      </LegalText>

      <LegalHeading>1. Оператор персональных данных</LegalHeading>
      <LegalText>
        Оператор: AI Service Lab. Контактный адрес по вопросам обработки персональных данных: {supportEmail}.
      </LegalText>

      <LegalHeading>2. Какие данные могут обрабатываться</LegalHeading>
      <LegalText>
        Через форму обратной связи пользователь может передать: имя или название компании, контакт для обратной связи, текст обращения, а также технические данные, необходимые для работы сайта и отправки формы.
      </LegalText>
      <LegalText>
        При посещении сайта также могут обрабатываться технические данные: IP-адрес, сведения о браузере и устройстве, дата и время посещения, адреса просмотренных страниц, источник перехода, технические события сайта и сведения о взаимодействии с интерфейсом.
      </LegalText>

      <LegalHeading>3. Цели обработки данных</LegalHeading>
      <LegalText>
        Данные используются для обработки входящих обращений, связи с пользователем, подготовки ответа на запрос, обсуждения проекта, услуги или продукта AI Service Lab, а также для анализа работы сайта и улучшения его структуры, интерфейса и качества материалов.
      </LegalText>

      <LegalHeading>4. Правовое основание обработки</LegalHeading>
      <LegalText>
        Обработка данных из формы обратной связи осуществляется на основании согласия пользователя, выраженного при отправке формы. Использование аналитических cookies и Яндекс Метрики осуществляется только после выбора пользователя в cookie-баннере или настройках cookies.
      </LegalText>

      <LegalHeading>5. Cookies и аналитика</LegalHeading>
      <LegalText>
        Сайт использует необходимые cookies для корректной работы сайта и сохранения выбора пользователя по cookies. С согласия пользователя сайт может использовать аналитические cookies Яндекс Метрики.
      </LegalText>
      <LegalText>
        Яндекс Метрика может использоваться для анализа посещаемости сайта, источников переходов, поведения пользователей на страницах, кликов, скроллинга, взаимодействия с формами и технических событий. На сайте может быть включён Вебвизор, карты кликов, карты скроллинга и аналитика форм.
      </LegalText>
      <LegalText>
        Пользователь может отказаться от аналитических cookies при первом посещении сайта, выбрать «Только необходимые» или изменить выбор позднее через ссылку «Настройки cookies» в футере сайта.
      </LegalText>

      <LegalHeading>6. Передача данных третьим лицам</LegalHeading>
      <LegalText>
        Для обработки обращений используется собственный серверный API сайта. Данные не продаются и не передаются третьим лицам для рекламных рассылок. Передача возможна только в объёме, необходимом для технической обработки обращения, работы аналитики при наличии согласия пользователя или в случаях, предусмотренных законодательством.
      </LegalText>

      <LegalHeading>7. Срок хранения данных</LegalHeading>
      <LegalText>
        Данные из обращений хранятся в течение срока, необходимого для обработки обращения и последующей коммуникации по запросу пользователя, если более длительный срок не требуется законом или деловой перепиской. Выбор пользователя по cookies хранится в браузере пользователя до удаления данных браузера или изменения настроек cookies на сайте.
      </LegalText>

      <LegalHeading>8. Права пользователя</LegalHeading>
      <LegalText>
        Пользователь может запросить уточнение, ограничение обработки или удаление своих персональных данных, а также отозвать согласие на обработку данных, направив обращение на {supportEmail}.
      </LegalText>

      <LegalHeading>9. Безопасность данных</LegalHeading>
      <LegalText>
        AI Service Lab принимает разумные организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия или уничтожения.
      </LegalText>

      <LegalHeading>10. Изменение политики</LegalHeading>
      <LegalText>
        Политика может обновляться. Актуальная версия размещается на этой странице.
      </LegalText>
    </>
  );
}

function PersonalDataConsent() {
  return (
    <>
      <LegalText>
        Настоящим пользователь, отправляя форму обратной связи на сайте AI Service Lab, свободно, своей волей и в своём интересе даёт согласие AI Service Lab на обработку персональных данных, указанных в форме.
      </LegalText>

      <LegalHeading>1. Персональные данные</LegalHeading>
      <LegalText>
        Согласие распространяется на данные, которые пользователь самостоятельно указывает в форме: имя или компания, контакт для обратной связи, текст обращения и иные сведения, добровольно указанные пользователем.
      </LegalText>

      <LegalHeading>2. Цели обработки</LegalHeading>
      <LegalText>
        Данные обрабатываются для получения и рассмотрения обращения, связи с пользователем, подготовки ответа, обсуждения проекта, услуги или продукта AI Service Lab.
      </LegalText>

      <LegalHeading>3. Действия с персональными данными</LegalHeading>
      <LegalText>
        Пользователь соглашается на сбор, запись, систематизацию, хранение, уточнение, использование, передачу в объёме, необходимом для технической отправки формы, обезличивание, блокирование и удаление персональных данных.
      </LegalText>

      <LegalHeading>4. Срок действия согласия</LegalHeading>
      <LegalText>
        Согласие действует до достижения целей обработки или до момента его отзыва пользователем.
      </LegalText>

      <LegalHeading>5. Отзыв согласия</LegalHeading>
      <LegalText>
        Пользователь может отозвать согласие, направив обращение на {supportEmail}.
      </LegalText>

      <LegalHeading>6. Подтверждение согласия</LegalHeading>
      <LegalText>
        Нажимая кнопку отправки формы, пользователь подтверждает, что ознакомился с Политикой конфиденциальности и настоящим согласием на обработку персональных данных.
      </LegalText>
    </>
  );
}

function CookiePolicy() {
  return (
    <>
      <LegalText>
        Настоящая Политика использования cookie объясняет, какие cookies и аналогичные технологии могут использоваться на сайте AI Service Lab, для чего они нужны и как пользователь может управлять своим выбором.
      </LegalText>

      <LegalHeading>1. Что такое cookies</LegalHeading>
      <LegalText>
        Cookies — это небольшие файлы или записи в браузере пользователя, которые помогают сайту работать корректно, запоминать технические настройки и анализировать использование сайта при наличии согласия пользователя.
      </LegalText>

      <LegalHeading>2. Какие категории cookies используются</LegalHeading>
      <LegalList>
        <li><strong>Необходимые cookies.</strong> Нужны для работы сайта, отображения интерфейса и сохранения выбора пользователя по cookies.</li>
        <li><strong>Аналитические cookies.</strong> Используются только после согласия пользователя и помогают анализировать посещаемость, поведение пользователей и эффективность сайта.</li>
      </LegalList>

      <LegalHeading>3. Необходимые cookies</LegalHeading>
      <LegalText>
        Необходимые cookies всегда включены, потому что без них сайт не сможет корректно сохранить выбор пользователя по cookies и обеспечить базовую работу интерфейса.
      </LegalText>

      <LegalHeading>4. Аналитические cookies и Яндекс Метрика</LegalHeading>
      <LegalText>
        С согласия пользователя сайт может подключать Яндекс Метрику. Она помогает оценивать посещаемость сайта, источники переходов, популярность разделов, клики, скроллинг, взаимодействие с формами и технические события.
      </LegalText>
      <LegalText>
        В Яндекс Метрике могут быть включены Вебвизор, карты кликов, карты скроллинга и аналитика форм. Эти инструменты используются для улучшения структуры сайта, удобства интерфейса и качества пользовательского пути.
      </LegalText>

      <LegalHeading>5. Управление cookies</LegalHeading>
      <LegalText>
        При первом посещении сайта пользователь может выбрать один из вариантов: принять все cookies, оставить только необходимые cookies или открыть детальные настройки. Выбор сохраняется в браузере пользователя.
      </LegalText>
      <LegalText>
        Пользователь может изменить или отозвать согласие на аналитические cookies через ссылку «Настройки cookies» в футере сайта. Также пользователь может удалить cookies и данные сайта через настройки своего браузера.
      </LegalText>

      <LegalHeading>6. Что происходит при отказе от аналитики</LegalHeading>
      <LegalText>
        Если пользователь выбирает «Только необходимые» или отключает аналитические cookies в настройках, Яндекс Метрика не должна запускаться до получения согласия на аналитику, а цели Метрики не должны отправляться с сайта.
      </LegalText>

      <LegalHeading>7. Контакты оператора</LegalHeading>
      <LegalText>
        По вопросам использования cookies и обработки данных можно написать на {supportEmail}.
      </LegalText>

      <LegalHeading>8. Изменение политики</LegalHeading>
      <LegalText>
        Политика использования cookie может обновляться. Актуальная версия размещается на этой странице.
      </LegalText>
    </>
  );
}

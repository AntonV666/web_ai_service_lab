type LegalPageProps = {
  variant: 'privacy' | 'personal-data';
};

const updatedAt = '02 июня 2026 года';

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
  const isPrivacy = variant === 'privacy';

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
          {isPrivacy ? <PrivacyPolicy /> : <PersonalDataConsent />}
        </article>
      </main>
    </div>
  );
}

function LegalHeading({ children }: { children: string }) {
  return <h2 className="mt-10 text-2xl font-black text-slate-950">{children}</h2>;
}

function LegalText({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-8 text-slate-700">{children}</p>;
}

function PrivacyPolicy() {
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
        AI Service Lab
      </p>
      <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950">
        Политика конфиденциальности
      </h1>
      <p className="mt-4 text-slate-500">Дата обновления: {updatedAt}</p>

      <LegalText>
        Настоящая Политика конфиденциальности описывает, как сайт AI Service Lab обрабатывает персональные данные пользователей, которые оставляют заявку через форму обратной связи, переходят по контактным ссылкам или взаимодействуют с сайтом.
      </LegalText>

      <LegalHeading>1. Оператор персональных данных</LegalHeading>
      <LegalText>
        Оператор: AI Service Lab. Контактный адрес по вопросам обработки персональных данных: support@ai-service-lab.ru.
      </LegalText>

      <LegalHeading>2. Какие данные могут обрабатываться</LegalHeading>
      <LegalText>
        Через форму обратной связи пользователь может передать: имя или название компании, контакт для обратной связи, текст обращения, а также технические данные, необходимые для работы сайта и отправки формы.
      </LegalText>

      <LegalHeading>3. Цели обработки данных</LegalHeading>
      <LegalText>
        Данные используются для обработки входящих обращений, связи с пользователем, подготовки ответа на запрос, обсуждения проекта, услуги или продукта AI Service Lab.
      </LegalText>

      <LegalHeading>4. Правовое основание обработки</LegalHeading>
      <LegalText>
        Обработка осуществляется на основании согласия пользователя, выраженного при отправке формы обратной связи, а также для обработки обращения, направленного пользователем по собственной инициативе.
      </LegalText>

      <LegalHeading>5. Передача данных третьим лицам</LegalHeading>
      <LegalText>
        Для отправки формы может использоваться сервис FormSubmit. Данные не продаются и не передаются третьим лицам для рекламных рассылок. Передача возможна только в объёме, необходимом для технической отправки обращения или в случаях, предусмотренных законодательством.
      </LegalText>

      <LegalHeading>6. Срок хранения данных</LegalHeading>
      <LegalText>
        Данные хранятся в течение срока, необходимого для обработки обращения и последующей коммуникации по запросу пользователя, если более длительный срок не требуется законом или деловой перепиской.
      </LegalText>

      <LegalHeading>7. Права пользователя</LegalHeading>
      <LegalText>
        Пользователь может запросить уточнение, ограничение обработки или удаление своих персональных данных, направив обращение на support@ai-service-lab.ru.
      </LegalText>

      <LegalHeading>8. Безопасность данных</LegalHeading>
      <LegalText>
        AI Service Lab принимает разумные организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия или уничтожения.
      </LegalText>

      <LegalHeading>9. Изменение политики</LegalHeading>
      <LegalText>
        Политика может обновляться. Актуальная версия размещается на этой странице.
      </LegalText>
    </>
  );
}

function PersonalDataConsent() {
  return (
    <>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
        AI Service Lab
      </p>
      <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950">
        Согласие на обработку персональных данных
      </h1>
      <p className="mt-4 text-slate-500">Дата обновления: {updatedAt}</p>

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
        Пользователь может отозвать согласие, направив обращение на support@ai-service-lab.ru.
      </LegalText>

      <LegalHeading>6. Подтверждение согласия</LegalHeading>
      <LegalText>
        Нажимая кнопку отправки формы, пользователь подтверждает, что ознакомился с Политикой конфиденциальности и настоящим согласием на обработку персональных данных.
      </LegalText>
    </>
  );
}

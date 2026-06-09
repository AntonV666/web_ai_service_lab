import { content } from '../content';

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-slate-50">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">Наши решения</h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Мы развиваем собственные продукты и создаём решения под задачи клиентов.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {content.products.map((product) => (
            <article
              key={product.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
                ✓
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                {product.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {product.lead}
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                {product.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                  href={product.href}
                  target={product.href.startsWith('http') ? '_blank' : undefined}
                  rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-8 inline-flex w-fit rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
                >
                  {product.cta}
                </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import ProductCard from './ProductCard'
import Reveal from './Reveal'
import { products } from '../data/content'

export default function Collection({ onAdd }) {
  return (
    <section id="collection" aria-labelledby="collection-title" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 id="collection-title" className="max-w-xl font-display text-5xl leading-[1.02] tracking-[-0.01em] text-ink sm:text-6xl">
            Made this season
          </h2>
          <p className="max-w-sm text-slate">
            Small runs, glazed one at a time. When a piece sells out, the next batch leaves the kiln in about
            six weeks.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 2) * 120} className={i % 2 === 1 ? 'lg:mt-14' : ''}>
              <ProductCard product={product} onAdd={onAdd} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Check, Plus } from 'lucide-react'
import Photo from './Photo'

const formatPrice = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

export default function ProductCard({ product, onAdd }) {
  const [added, setAdded] = useState(false)
  const timer = useRef()

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleAdd = () => {
    onAdd(product)
    setAdded(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setAdded(false), 1800)
  }

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-bisque">
        <Photo
          {...product.photo}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
        />

        {/* Revealed on hover and on keyboard focus; always visible on touch screens */}
        <button
          type="button"
          onClick={handleAdd}
          className="absolute inset-x-0 bottom-0 flex h-12 translate-y-0 items-center justify-center gap-2 bg-ink text-[0.9rem] font-medium text-white transition duration-300 hover:bg-glaze focus-visible:translate-y-0 focus-visible:bg-glaze [@media(hover:hover)]:translate-y-full [@media(hover:hover)]:group-hover:translate-y-0"
        >
          {added ? (
            <>
              <Check size={16} strokeWidth={1.75} aria-hidden="true" /> Added to bag
            </>
          ) : (
            <>
              <Plus size={16} strokeWidth={1.75} aria-hidden="true" /> Add to bag
            </>
          )}
          <span className="sr-only"> {product.name}</span>
        </button>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[1.7rem] leading-tight text-ink transition-colors group-hover:text-glaze">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-slate">{product.category}</p>
        </div>
        <p className="pt-1.5 text-[0.95rem] font-medium text-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

import { Hand, Hourglass, Leaf } from 'lucide-react'
import Reveal from './Reveal'
import { principles } from '../data/content'

const icons = { Hand, Leaf, Hourglass }

export default function Principles() {
  return (
    <section id="craft" aria-labelledby="craft-title" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 id="craft-title" className="max-w-2xl font-display text-5xl leading-[1.02] tracking-[-0.01em] text-ink sm:text-6xl">
            How we make things
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-0 border-t border-stone md:grid-cols-3">
          {principles.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <li
                key={item.title}
                className="border-b border-stone py-10 md:border-b-0 md:py-12 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
              >
                <Reveal delay={i * 120}>
                  <Icon size={30} strokeWidth={1.25} className="text-glaze" aria-hidden="true" />
                  <h3 className="mt-8 font-display text-3xl leading-tight text-ink">{item.title}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-slate">{item.text}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

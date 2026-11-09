import Photo from './Photo'
import Reveal from './Reveal'
import { gallery } from '../data/content'

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-bisque py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 id="gallery-title" className="max-w-xl font-display text-5xl leading-[1.02] tracking-[-0.01em] text-ink sm:text-6xl">
            Around the studio
          </h2>
          <p className="max-w-sm text-slate">
            Work in progress, finished pieces and the shelves where they dry.
          </p>
        </Reveal>

        {/* CSS columns give a true masonry flow with mixed image proportions */}
        <div className="mt-16 columns-2 gap-3 sm:gap-5 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100} className="mb-3 break-inside-avoid sm:mb-5">
              <figure className={`overflow-hidden bg-stone ${item.ratio}`}>
                <Photo
                  id={item.id}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

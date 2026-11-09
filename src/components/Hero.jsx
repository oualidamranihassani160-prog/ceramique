import Photo from './Photo'
import { photos } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-16">
        {/* Copy */}
        <div className="flex flex-col justify-between lg:col-span-7 lg:pb-10 lg:pt-6">
          <h1 className="font-display text-[clamp(3.6rem,9.5vw,8.75rem)] leading-[0.92] tracking-[-0.02em] text-ink">
            Shaped by&nbsp;Hand.
            <br />
            Inspired by Nature.
          </h1>

          <div className="mt-10 max-w-md lg:mt-24">
            <p className="text-lg leading-relaxed text-slate">
              CERAMIQUE is a small pottery studio. We throw, glaze and fire vases, cups and bowls by hand, in
              quiet, useful shapes that get better with every morning they are used.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href="#collection"
                className="inline-flex h-12 items-center bg-ink px-8 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-glaze focus-visible:bg-glaze"
              >
                Explore Collection
              </a>
              <a
                href="#story"
                className="group relative py-1 text-[0.95rem] font-medium text-ink transition-colors hover:text-glaze"
              >
                Our Story
                <span className="absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Photography: one tall portrait, one small inset, offset for an editorial rhythm */}
        <div className="relative lg:col-span-5 lg:mt-20">
          <div className="absolute -right-5 -top-6 hidden h-[88%] w-[78%] bg-mist/50 sm:block lg:-right-8" aria-hidden="true" />

          <div className="unveil relative aspect-[4/5] overflow-hidden bg-bisque">
            <Photo
              {...photos.hero}
              eager
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>

          <div className="unveil absolute -bottom-10 -left-4 aspect-[4/3] w-[46%] overflow-hidden border-4 border-white bg-bisque sm:-left-10 lg:-left-16" style={{ animationDelay: '0.55s' }}>
            <Photo {...photos.heroInset} eager sizes="(min-width: 1024px) 20vw, 40vw" />
          </div>
        </div>
      </div>
    </section>
  )
}

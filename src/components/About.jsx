import Photo from './Photo'
import Reveal from './Reveal'
import { photos } from '../data/content'

export default function About() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-bisque py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <div className="aspect-[5/4] overflow-hidden bg-stone lg:aspect-[4/5]">
            <Photo {...photos.about} sizes="(min-width: 1024px) 48vw, 100vw" />
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6 lg:pr-8">
          <h2 id="story-title" className="font-display text-5xl leading-[1.02] tracking-[-0.01em] text-ink sm:text-6xl">
            The Art of Slow Creation
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-[1.05rem] leading-relaxed text-slate">
            <p>
              A single vase takes us about two weeks. The clay is wedged and thrown on the wheel, left to dry
              slowly so it does not crack, then fired twice and glazed between the firings.
            </p>
            <p>
              We work this way because rushed pottery shows. Walls get uneven, glazes pool in the wrong
              places, and rims chip. Taking our time lets us make pieces that sit well in the hand and hold up
              to daily use.
            </p>
            <p>
              The studio is run by three potters. Every piece is signed on the base by the person who made it.
            </p>
          </div>

          <a
            href="#contact"
            className="group relative mt-10 inline-block py-1 font-medium text-ink transition-colors hover:text-glaze"
          >
            Visit the studio
            <span className="absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

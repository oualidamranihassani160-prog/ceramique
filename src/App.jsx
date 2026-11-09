import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import About from './components/About'
import Principles from './components/Principles'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  const [bagCount, setBagCount] = useState(0)
  const addToBag = useCallback(() => setBagCount((n) => n + 1), [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar bagCount={bagCount} />
      <main id="main">
        <Hero />
        <Collection onAdd={addToBag} />
        <About />
        <Principles />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

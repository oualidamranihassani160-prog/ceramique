import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/content'

export default function Navbar({ bagCount }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the menu; body scroll is locked while it is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the mobile menu if the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-stone bg-white/95 backdrop-blur' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-1 text-[0.95rem] text-ink transition-colors hover:text-glaze"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-glaze transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="#collection"
            aria-label={`Shopping bag, ${bagCount} ${bagCount === 1 ? 'item' : 'items'}`}
            className="relative grid h-11 w-11 place-items-center text-ink transition-colors hover:text-glaze"
          >
            <ShoppingBag size={21} strokeWidth={1.5} aria-hidden="true" />
            {bagCount > 0 && (
              <span className="absolute right-1 top-1.5 grid h-4 min-w-4 place-items-center bg-ink px-1 text-[0.65rem] font-medium leading-none text-white">
                {bagCount}
              </span>
            )}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center text-ink transition-colors hover:text-glaze md:hidden"
          >
            {open ? <X size={22} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] border-t border-stone bg-white md:hidden"
      >
        <nav aria-label="Mobile" className="px-5 pt-8 sm:px-8">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-stone">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-display text-4xl text-ink transition-colors hover:text-glaze"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

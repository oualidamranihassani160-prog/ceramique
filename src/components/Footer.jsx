import Logo from './Logo'
import { navLinks, socials } from '../data/content'

// Lucide 1.x no longer ships brand icons, so these are small inline SVGs.
const icons = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  Pinterest: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10.6 16.5 12.2 9.8M9.4 12.4c-.5-2.200 1-3.900 3-3.900 1.700 0 2.800 1.100 2.800 2.600 0 1.900-1.100 3.200-2.600 3.200-.8 0-1.300-.4-1.500-.9" />
    </>
  ),
  Facebook: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M13.200 20.900v-7.300h2.300l.4-2.700h-2.700V9.200c0-.8.300-1.400 1.400-1.400H16V5.400c-.3 0-1.100-.1-2.100-.1-2.100 0-3.500 1.300-3.500 3.600v2H8.100v2.700h2.300v7.300" />
    </>
  ),
}

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 leading-relaxed text-slate">Handmade pottery, thrown and fired in small batches.</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 md:items-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ink transition-colors hover:text-glaze">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-stone pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">&copy; {new Date().getFullYear()} CERAMIQUE. All rights reserved.</p>

          <ul className="flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center border border-stone text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[s.label]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default function Logo({ className = 'text-ink', href = '#home' }) {
  return (
    <a
      href={href}
      aria-label="CERAMIQUE, back to top"
      className={`font-display text-[1.65rem] leading-none tracking-[0.14em] ${className}`}
    >
      CERAMIQUE
    </a>
  )
}

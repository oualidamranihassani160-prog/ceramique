import { useId, useState } from 'react'
import { Check } from 'lucide-react'
import Reveal from './Reveal'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const inputId = useId()
  const errorId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()

    if (!value) {
      setError('Enter your email address to subscribe.')
      return
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError('That email looks incomplete. Use the format name@example.com.')
      return
    }

    // Frontend only: no request is sent anywhere.
    setError('')
    setDone(true)
  }

  return (
    <section id="contact" aria-labelledby="newsletter-title" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <h2 id="newsletter-title" className="font-display text-5xl leading-[1.02] tracking-[-0.01em] sm:text-6xl">
            Hear when the kiln opens
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
            One email when a new batch is ready, plus occasional notes from the studio. No more than twice a
            month.
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8 lg:self-end">
          {done ? (
            <div role="status" className="flex items-start gap-4 border border-sky/60 p-6">
              <Check size={22} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
              <div>
                <p className="font-display text-3xl leading-tight">You are on the list.</p>
                <p className="mt-2 text-mist">
                  We will write to <span className="text-white">{email.trim()}</span> when the next batch is out.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor={inputId} className="block text-[0.95rem] font-medium">
                Email address
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id={inputId}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? errorId : undefined}
                  placeholder="name@example.com"
                  className={`h-12 min-w-0 flex-1 border bg-transparent px-4 text-white placeholder:text-white/45 focus:border-sky focus:outline-none focus-visible:outline-none ${
                    error ? 'border-mist' : 'border-white/35'
                  }`}
                />
                <button
                  type="submit"
                  className="h-12 bg-white px-8 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-mist focus-visible:bg-mist focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
              <p id={errorId} role="alert" className="mt-3 min-h-6 text-[0.9rem] text-mist">
                {error}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

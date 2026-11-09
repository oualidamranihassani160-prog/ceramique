const url = (id, w) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

// Responsive <img> for a Pexels photo id. Pass an aspect-ratio class on the
// wrapper; the image fills it with object-cover.
export default function Photo({
  id,
  alt,
  sizes = '(min-width: 1024px) 40vw, 100vw',
  eager = false,
  className = '',
}) {
  return (
    <img
      src={url(id, 1000)}
      srcSet={`${url(id, 500)} 500w, ${url(id, 900)} 900w, ${url(id, 1400)} 1400w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

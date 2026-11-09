// All photography is hosted on Pexels (free to use, hotlinking allowed).
// Each entry is a Pexels photo id; see src/components/Photo.jsx for the URL pattern.

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
]

export const photos = {
  hero: { id: 8801077, alt: 'A blue ceramic vase beside a small geometric cup on a soft studio backdrop' },
  heroInset: { id: 36717713, alt: 'Hands shaping a ceramic bowl on a pottery wheel' },
  about: { id: 6611312, alt: 'A potter shaping a vase on the wheel in the studio' },
}

export const products = [
  {
    id: 'vase',
    name: 'Ceramic Vase',
    category: 'Vases',
    price: 128,
    photo: { id: 10295066, alt: 'White ceramic vase holding white flowers' },
  },
  {
    id: 'cup',
    name: 'Artisan Cup',
    category: 'Cups',
    price: 42,
    photo: { id: 11410247, alt: 'Row of small handmade ceramic cups on a shelf' },
  },
  {
    id: 'bowl',
    name: 'Stoneware Bowl',
    category: 'Bowls',
    price: 68,
    photo: { id: 6944482, alt: 'Close-up of a white stoneware bowl' },
  },
  {
    id: 'jar',
    name: 'Sculpted Jar',
    category: 'Sculpted pieces',
    price: 96,
    photo: { id: 3093111, alt: 'Handmade earthenware jars on wooden shelves' },
  },
]

export const principles = [
  {
    icon: 'Hand',
    title: 'Handmade with Care',
    text: 'Every piece is thrown, trimmed and glazed by hand. Fingerprints and small variations stay, because they show who made it.',
  },
  {
    icon: 'Leaf',
    title: 'Naturally Inspired',
    text: 'Our forms follow river stones, seed pods and coastal light. Glazes are mixed in small batches from mineral pigments.',
  },
  {
    icon: 'Hourglass',
    title: 'Made to Last',
    text: 'High-fired stoneware is dense, food safe and dishwasher friendly. We make fewer things so each one can be used for decades.',
  },
]

// Aspect classes are deliberately varied for the masonry rhythm.
export const gallery = [
  { id: 18267464, alt: 'Warm pottery studio with handmade ceramics and green plants', ratio: 'aspect-[3/4]' },
  { id: 27180805, alt: 'Ceramic vases with dried flowers in soft neutral tones', ratio: 'aspect-[16/10]' },
  { id: 26733186, alt: 'Shelves filled with handcrafted clay containers', ratio: 'aspect-[2/3]' },
  { id: 14608172, alt: 'Three minimalist white vases on a deep red surface', ratio: 'aspect-[5/4]' },
  { id: 15440781, alt: 'Handcrafted clay pottery on a wooden shelf', ratio: 'aspect-[3/5]' },
  { id: 12984939, alt: 'Stack of hand-painted ceramic bowls', ratio: 'aspect-square' },
  { id: 12486411, alt: 'Dried bunny tails in a minimalist ceramic vase', ratio: 'aspect-[4/5]' },
]

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Facebook', href: '#' },
]

export const products = [
  {
    id: 'dreamforge-branding-kit',
    name: 'DreamForge — Ultimate AI Branding Kit',
    price: 29.90,
    currency: 'USD',
    image: '/images/branding-kit.png',
    short: 'Premium AI-branding pack: logos, templates, colors, prompts.'
  }
];

export function getProducts() { return products; }
export function getProduct(id) { return products.find(p => p.id === id); }

export const products = [
  {
    id: "ai-prompts-500",
    name: "500 Viral AI Prompts Pack",
    description: "500 ready-to-use prompts for ChatGPT & Midjourney. Boost engagement & ideas.",
    price_usd: 29.00,
    image: "/images/branding-kit.png"
  }
];

export function getProduct(id){ return products.find(p => p.id === id); }

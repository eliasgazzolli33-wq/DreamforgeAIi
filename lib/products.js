export const products = [
  {
    id: "ai-prompts-500",
    name: "500 Viral AI Prompts Pack",
    description: "500 high-converting prompts for ChatGPT & Midjourney. Grow engagement fast.",
    price_usd: 29.0,
    file: "/downloads/ai-prompts-500.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "business-starter-kit",
    name: "AI Business Starter Kit",
    description: "Prompts, templates & workflow to start an AI business in days.",
    price_usd: 29.0,
    file: "/downloads/business-starter-kit.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "viral-content-pro",
    name: "Viral Content Creator Pro",
    description: "Templates, captions and AI prompts to make viral posts.",
    price_usd: 24.0,
    file: "/downloads/viral-content-pro.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "remote-work-toolkit",
    name: "Remote Work Toolkit",
    description: "Notion templates, automations and AI prompts for freelancers.",
    price_usd: 19.0,
    file: "/downloads/remote-work-toolkit.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "chatgpt-master",
    name: "ChatGPT Master Prompts",
    description: "1,000 pro prompts for business, marketing and creativity.",
    price_usd: 27.0,
    file: "/downloads/chatgpt-master.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "canva-templates-empire",
    name: "Canva Templates Empire",
    description: "500 editable templates for social media & ads.",
    price_usd: 21.0,
    file: "/downloads/canva-templates.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "digital-agency-pack",
    name: "Digital Agency Starter Pack",
    description: "Sales scripts, proposals and AI automations to start an agency.",
    price_usd: 34.0,
    file: "/downloads/digital-agency-pack.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "mind-reset",
    name: "Mind Reset – Digital Detox Guide",
    description: "Guide + audio routines for better focus & productivity.",
    price_usd: 17.0,
    file: "/downloads/mind-reset.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "startup-idea-generator",
    name: "Startup Idea Generator",
    description: "Spreadsheet + prompts to generate scalable startup ideas.",
    price_usd: 22.0,
    file: "/downloads/startup-idea-generator.zip",
    image: "/images/placeholder.png"
  },
  {
    id: "productivity-system",
    name: "Ultimate Productivity System",
    description: "Notion + templates + AI routines for top performance.",
    price_usd: 29.0,
    file: "/downloads/productivity-system.zip",
    image: "/images/placeholder.png"
  }
];

export function getProducts() { return products; }
export function getProduct(id) { return products.find(p => p.id === id); }

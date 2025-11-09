import Stripe from "stripe";
import { getProduct } from "../../../lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });

// Promotion window (UTC)
const PROMO_START = new Date("2025-11-01T00:00:00Z");
const PROMO_END = new Date("2025-11-15T23:59:59Z");

export async function POST(req) {
  try {
    const body = await req.json();
    const { productId, quantity = 1 } = body;
    const product = getProduct(productId);
    if (!product) return new Response(JSON.stringify({ error: "Product not found" }), { status: 400 });

    const unitCents = Math.round(product.price_usd * 100);
    // apply Buy 2 Get 1 Free: for each group of 3, charge 2
    let chargeQty = quantity;
    const now = new Date();
    if (now >= PROMO_START && now <= PROMO_END) {
      const groups = Math.floor(quantity / 3);
      const rem = quantity % 3;
      chargeQty = groups * 2 + rem;
    }

    const line_items = [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.name, description: product.description },
          unit_amount: unitCents
        },
        quantity: chargeQty
      }
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      metadata: { productId: product.id, requestedQuantity: String(quantity) }
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

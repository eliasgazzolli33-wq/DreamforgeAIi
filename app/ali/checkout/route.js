import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });

// Promoção — ajuste as datas aqui (UTC)
const PROMO_START = new Date("2025-11-01T00:00:00Z");
const PROMO_END   = new Date("2025-11-15T23:59:59Z");

import { getProduct } from "../../../lib/products";

export async function POST(req) {
  try {
    const body = await req.json();
    const { productId, quantity = 1 } = body;
    const product = getProduct(productId);

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 400 });
    }

    // calcular preço em cents (USD)
    const unitAmount = Math.round(product.price_usd * 100);

    // se promo ativa e cliente pediu 3, cobre 2 (Buy 2 Get 1 Free)
    const now = new Date();
    let chargeQuantity = quantity;

    if (now >= PROMO_START && now <= PROMO_END) {
      // aplica regra: se qty >=3, a cada 3 cobrar 2
      const groupsOf3 = Math.floor(quantity / 3);
      const remainder = quantity % 3;
      chargeQuantity = groupsOf3 * 2 + remainder;
    }

    // monta items para Stripe
    const line_items = [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.name, description: product.description },
          unit_amount: unitAmount
        },
        quantity: chargeQuantity
      }
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      // opcional: metadados para reconciliar e entregar
      metadata: { productId: product.id, originalQuantity: quantity.toString() }
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { products } from '../../../lib/products';

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, title, price } = body;

    const product = products.find(p => p.id === id);
    // fallback if product not in list
    const itemTitle = title || (product && product.name) || 'DreamForge Product';
    const itemPrice = Number(price || (product && product.price) || 9.9);

    const preference = {
      items: [
        {
          title: itemTitle,
          quantity: 1,
          currency_id: 'BRL', // mercado pago uses BRL. If you want USD, MercadoPago may not accept — keep BRL if MP account is BR
          unit_price: itemPrice
        },
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_URL}/sucesso`,
        failure: `${process.env.NEXT_PUBLIC_URL}/erro`,
        pending: `${process.env.NEXT_PUBLIC_URL}/pendente`
      },
      auto_return: 'approved'
    };

    const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`
      },
      body: JSON.stringify(preference)
    });

    const data = await resp.json();
    if (data.init_point) {
      return NextResponse.json({ init_point: data.init_point });
    } else {
      console.error('MP response', data);
      return NextResponse.json({ error: data }, { status: 500 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

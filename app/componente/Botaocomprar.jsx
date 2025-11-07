"use client";

export default function BotaoComprar({ id, name, price }) {
  const pagar = async () => {
    try {
      const res = await fetch('/api/pagar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, title: name, price })
      });
      const data = await res.json();
      if (data.init_point) {
        // abre o checkout pro
        window.location.href = data.init_point;
      } else {
        alert('Erro ao iniciar pagamento.');
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      alert('Erro de rede.');
    }
  };

  return (
    <button onClick={pagar}
      className="px-6 py-3 rounded bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] text-white font-semibold">
      Buy now — ${price}
    </button>
  );
}

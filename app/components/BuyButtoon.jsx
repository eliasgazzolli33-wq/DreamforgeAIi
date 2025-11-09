"use client";
import { useState } from "react";

export default function BuyButton({ productId, label = "Buy Now" }) {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: qty })
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else {
        alert("Error creating checkout");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div style={{marginBottom:8}}>
        <label style={{marginRight:8}}>Qty</label>
        <select value={qty} onChange={(e)=>setQty(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>

      <button onClick={handleBuy} disabled={loading}
        style={{
          padding:"10px 18px",
          background:"#0b1220",
          color:"#fff",
          borderRadius:8,
          fontWeight:700
        }}>
        {loading ? "Processing..." : label}
      </button>
    </div>
  )
}

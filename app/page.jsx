import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}</style>
      <Navbar />
      <div className="container">
        <div className="hero">
          <h1 style={{fontSize:36, margin:0}}>DreamForge AI — Digital Tools for Global Creators</h1>
          <p style={{color:"#6b7280", marginTop:12}}>High-value AI packs: prompts, templates, toolkits. Instant delivery. Global checkout in USD.</p>

          <div style={{marginTop:18}}>
            <Link href="/products" className="btn">Explore Products</Link>
            <a href="#promo" style={{marginLeft:12, color:"#0b84ff"}}>Limited time: Buy 2 Get 1 Free →</a>
          </div>
        </div>

        <section style={{marginTop:26}}>
          <h2 style={{margin:0}}>Top picks</h2>
          <p style={{color:"#6b7280"}}>Starting with the best-sellers designed to convert fast.</p>
        </section>
      </div>

      <Footer />
    </>
  );
}

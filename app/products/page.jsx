import { getProducts } from "../../lib/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductsPage(){
  const products = getProducts();
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{marginTop:6}}>Products</h1>
        <p style={{color:"#6b7280"}}>Digital packs designed to sell globally.</p>

        <div id="promo" style={{marginTop:12, padding:12, borderRadius:10, background:"#fffbf0"}}>
          <strong className="badge">Limited Offer</strong>
          <div style={{display:"inline-block", marginLeft:12}}>
            Buy 2 Get 1 Free — automatic at checkout (ends in 2 weeks).
          </div>
        </div>

        <div className="grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}

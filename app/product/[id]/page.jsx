import { getProduct } from "../../../lib/products";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";

const BuyButton = (await import("../../components/BuyButton")).default;

export default function ProductPage({ params }) {
  const product = getProduct(params.id);
  if(!product) return <div className="container">Product not found</div>;
  return (
    <>
      <Navbar />
      <div className="container" style={{paddingTop:20}}>
        <div style={{display:"flex",gap:24,alignItems:"flex-start"}}>
          <img src={product.image} style={{width:360,borderRadius:12}} alt={product.name}/>
          <div>
            <h1>{product.name}</h1>
            <p style={{color:"#6b7280"}}>{product.description}</p>
            <p style={{fontWeight:700, marginTop:12}}>${product.price_usd.toFixed(2)}</p>

            <div style={{marginTop:16}}>
              <BuyButton productId={product.id} label={`Buy Now — $${product.price_usd.toFixed(2)}`} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

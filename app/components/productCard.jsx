import Link from "next/link";

export default function ProductCard({ product }){
  return (
    <div className="card">
      <img src={product.image} alt={product.name} style={{width:"100%",height:160,objectFit:"cover",borderRadius:8}}/>
      <h3 style={{marginTop:12}}>{product.name}</h3>
      <p style={{color:"#6b7280"}}>{product.description}</p>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:12}}>
        <div style={{fontWeight:700}}>${product.price_usd.toFixed(2)}</div>
        <Link href={`/products/${product.id}`} className="btn">View</Link>
      </div>
    </div>
  )
}

import Link from "next/link";
export default function Navbar(){
  return (
    <header className="container header">
      <div className="brand">DreamForge AI</div>
      <nav>
        <Link href="/products" style={{marginRight:12}}>Products</Link>
        <Link href="/#about" style={{marginRight:12,color:"#6b7280"}}>About</Link>
        <Link href="/#contact" style={{color:"#6b7280"}}>Contact</Link>
      </nav>
    </header>
  )
}

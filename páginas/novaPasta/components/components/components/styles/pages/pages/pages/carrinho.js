import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Carrinho() {
  return (
    <>
      <Header />
      <div style={{padding: "20px"}}>
        <h1>Carrinho</h1>
        <p>Seu carrinho está vazio.</p>
      </div>
      <Footer />
    </>
  );
}

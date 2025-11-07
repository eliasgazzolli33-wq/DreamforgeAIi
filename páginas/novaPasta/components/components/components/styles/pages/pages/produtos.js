import Header from "../components/Header";
import Footer from "../components/Footer";
import ProdutoCard from "../components/ProdutoCard";

export default function Produtos() {
  return (
    <>
      <Header />
      <div style={{padding: "20px"}}>
        <h1>Produtos</h1>

        <ProdutoCard 
          nome="Pack Artes Profissionais" 
          preco="29,90" 
          descricao="Pacote com 50 artes exclusivas e editáveis."
        />

        <ProdutoCard 
          nome="Template Loja Digital" 
          preco="49,90" 
          descricao="Modelo completo para criar sua loja online."
        />

      </div>
      <Footer />
    </>
  );
}

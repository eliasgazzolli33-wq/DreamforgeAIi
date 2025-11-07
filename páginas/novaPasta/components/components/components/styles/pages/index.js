import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{padding: "20px"}}>
        <h1>Bem-vindo à DreamForge AI</h1>
        <p>Crie, venda e gerencie produtos digitais com inteligência.</p>
      </div>
      <Footer />
    </>
  );
}

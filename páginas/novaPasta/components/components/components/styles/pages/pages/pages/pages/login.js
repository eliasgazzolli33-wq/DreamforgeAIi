import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Header />
      <div style={{padding: "20px"}}>
        <h1>Entrar</h1>
        <input type="email" placeholder="Email" style={{padding: "10px", width: "100%", marginBottom: "10px"}}/>
        <input type="password" placeholder="Senha" style={{padding: "10px", width: "100%", marginBottom: "10px"}}/>
        <button style={{padding: "10px 20px"}}>Entrar</button>
      </div>
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      background: "#f5f5f5",
      color: "#222",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1>🚀 Loja Digital DreamForge</h1>
      <p>Seu site está online e pronto para vender produtos digitais.</p>
      <a 
        href="/product/1" 
        style={{
          marginTop: "20px",
          background: "#0070f3",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
        Ver Produto de Exemplo
      </a>
    </main>
  );
}

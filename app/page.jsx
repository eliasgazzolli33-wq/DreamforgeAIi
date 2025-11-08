export default function ProductPage() {
  return (
    <main
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>✨ Dreamforge Tools</h1>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Explore ferramentas digitais exclusivas criadas com inteligência artificial.
      </p>

      <div style={{ marginTop: "40px" }}>
        <div
          style={{
            display: "inline-block",
            padding: "20px",
            border: "2px solid #000",
            borderRadius: "10px",
            width: "250px",
          }}
        >
          <h3>🔥 AI eBook Generator</h3>
          <p>Crie eBooks únicos automaticamente com IA em segundos.</p>
          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Comprar
          </a>
        </div>
      </div>
    </main>
  );
}

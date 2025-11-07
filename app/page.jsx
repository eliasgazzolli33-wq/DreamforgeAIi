export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>
        Dreamforge AI
      </h1>

      <p style={{ fontSize: "20px" }}>
        Bem-vindo à sua plataforma de produtos digitais!
      </p>

      <a
        href="/product"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          fontSize: "20px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Explore Our Tools
      </a>
    </main>
  );
}

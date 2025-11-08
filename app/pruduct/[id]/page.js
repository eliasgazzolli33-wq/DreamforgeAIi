export default function ProductPage({ params }) {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      background: "#f5f5f5"
    }}>
      <h1>🛍️ Produto ID: {params.id}</h1>
      <p>Página de produto funcionando!</p>
    </main>
  );
}

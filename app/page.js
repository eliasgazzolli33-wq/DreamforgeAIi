export default function HomePage() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 28, fontWeight: 'bold' }}>
        🚀 Bem-vindo à DreamForge AI
      </h1>

      <p style={{ marginTop: 20, fontSize: 18 }}>
        Ferramentas digitais que impulsionam o futuro dos negócios.
      </p>

      <a
        href="/product/1"
        style={{
          display: 'inline-block',
          marginTop: 40,
          padding: '14px 28px',
          background: 'black',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 8,
        }}
      >
        Ver produto
      </a>
    </div>
  )
}

export default function ProductPage({ params }) {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 28, fontWeight: 'bold' }}>
        Produto {params.id}
      </h1>

      <p style={{ marginTop: 20, fontSize: 18 }}>
        A ferramenta digital que impulsiona sua produtividade.
      </p>

      <h2 style={{ marginTop: 30, fontSize: 22 }}>O que você encontra:</h2>
      <ul style={{ marginTop: 10, fontSize: 17, lineHeight: 1.6 }}>
        <li>Sistema de prompts avançados</li>
        <li>Ferramentas automáticas de pesquisa</li>
        <li>Gerador de ideias de negócios globais</li>
        <li>Atualizações semanais</li>
      </ul>

      <a
        href="#"
        style={{
          display: 'inline-block',
          marginTop: 40,
          padding: '16px 32px',
          background: 'black',
          color: 'white',
          textDecoration: 'none',
          fontSize: 18,
          borderRadius: 6,
        }}
      >
        Comprar agora
      </a>
    </div>
  )
}

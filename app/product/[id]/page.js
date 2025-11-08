export default function ProductPage({ params }) {
  const { id } = params;

  // Exemplo simples de produto digital
  const produtos = {
    1: {
      nome: "Guia de Sucesso Digital",
      descricao: "Aprenda a criar e vender produtos digitais de alto valor.",
      preco: "US$ 29,90",
      imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
    },
    2: {
      nome: "Pacote de Artes Premium",
      descricao: "Mais de 500 modelos editáveis para suas redes sociais.",
      preco: "US$ 19,90",
      imagem: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
    }
  };

  const produto = produtos[id] || {
    nome: "Produto não encontrado",
    descricao: "Esse produto não existe.",
    preco: "-",
    imagem: "https://via.placeholder.com/600x400?text=Produto+não+encontrado"
  };

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      background: "#fafafa",
      padding: "2rem",
      color: "#222"
    }}>
      <img src={produto.imagem} alt={produto.nome} style={{
        width: "300px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "20px"
      }} />
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>{produto.preco}</p>

      <a 
        href="/" 
        style={{
          marginTop: "20px",
          background: "#0070f3",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
        Voltar à Loja
      </a>
    </main>
  );
}

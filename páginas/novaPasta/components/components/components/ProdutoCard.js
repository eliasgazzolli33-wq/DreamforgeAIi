export default function ProdutoCard({ nome, preco, descricao }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px"
    }}>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  );
}

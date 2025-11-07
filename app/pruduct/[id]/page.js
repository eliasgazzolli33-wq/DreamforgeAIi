import { getProduct } from '../../../lib/products';
import BotaoComprar from '../../components/BotaoComprar';

export default function ProductPage({ params }) {
  const product = getProduct(params.id);
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full max-w-md mt-4" />
      <p className="mt-4 text-gray-300">{product.short}</p>
      <div className="mt-6">
        <BotaoComprar id={product.id} name={product.name} price={product.price} />
      </div>
    </div>
  );
}

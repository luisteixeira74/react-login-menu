import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  active: boolean;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const visibleProducts = products.slice(0, 8);

  return (
    <div className="grid grid-cols-4 gap-4">
      {visibleProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          id={product.id} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}

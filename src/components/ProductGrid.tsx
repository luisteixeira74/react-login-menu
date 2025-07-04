import { ProductImage } from './ProductImage'

interface Product {
  id: number;
  name: string;
  price: number;
  active: boolean;
  image_url: string;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const visibleProducts = products.slice(0, 8);

  return (
    <div className="grid grid-cols-4 gap-4">
      {visibleProducts.map((product) => (
        <ProductImage 
          {...product}
        />
      ))}
    </div>
  );
}

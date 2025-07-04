interface ProductProps {
  id: number;
  name: string;
  price: number;
  image_url: string;
}

export function ProductImage({name, price, image_url }: ProductProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
      <img
        className="w-full h-48 object-cover"
        src={image_url}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          R$ {(Number(price) || 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

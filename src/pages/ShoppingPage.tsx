import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import api, { } from '../api/api'
import { ProductGrid } from '../components/ProductGrid';
import ReactPaginate from 'react-paginate';

interface Product {
  id: number;
  name: string;
  price: number;
  active: boolean;
  image_url: string;
}

const ITEMS_PER_PAGE = 8;

export function ShoppingPage() {
  const { isAuthenticated } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
  api.get<Product[]>('http://localhost:4000/products')
    .then(res => setProducts(res.data))
    .catch(err => console.error('Erro:', err));
}, []);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = products.slice(offset, offset + ITEMS_PER_PAGE);
  
  return (
     <div className="w-full h-[calc(100vh-250px)] bg-gray-800 p-4">
      {isAuthenticated ? (
        <>
          <h1 className="text-white font-inter mb-6">Shopping Page</h1>
          <ProductGrid products={currentItems} />

          <ReactPaginate
            previousLabel={'← Anterior'}
            nextLabel={'Próximo →'}
            pageCount={Math.ceil(products.length / ITEMS_PER_PAGE)}
            onPageChange={handlePageClick}
            containerClassName={'flex justify-center space-x-2 mt-6'}
            pageClassName={'px-3 py-1 border rounded cursor-pointer'}
            activeClassName={'bg-blue-500 text-white'}
            disabledClassName={'opacity-50 cursor-not-allowed'}
          />
        </>
      ) : (
        <>
        <div className="text-white text-3xl font-inter">Para visualizar os produtos você precisa estar logado.</div>
        <Link to="/login" className="text-blue-500 hover:underline mt-4">
          Fazer Login
        </Link>
        </>
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import api from '../api/api';
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
    api
      .get<Product[]>('http://localhost:4000/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Erro:', err));
  }, []);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = products.slice(offset, offset + ITEMS_PER_PAGE);

  const paginateStyles = {
    container: 'flex justify-center space-x-2 mt-6',
    page: 'w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-white bg-gray-700 hover:bg-gray-600 cursor-pointer',
    active: 'bg-white text-black border-white font-semibold',
    arrow:
      'w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-white hover:bg-gray-600',
    disabled: 'opacity-40 cursor-not-allowed',
    break:
      'w-10 h-10 flex items-center justify-center rounded-full text-gray-400',
  };

  return (
    <div className="w-full h-[calc(100vh-250px)] mt-[196px]">
      {isAuthenticated ? (
        <>
          <h1 className="text-white font-inter mb-6">Shopping Page</h1>
          <ProductGrid products={currentItems} />

          <ReactPaginate
            previousLabel="←"
            nextLabel="→"
            onPageChange={handlePageClick}
            pageCount={Math.ceil(products.length / ITEMS_PER_PAGE)}
            containerClassName={paginateStyles.container}
            pageClassName={paginateStyles.page}
            activeClassName={paginateStyles.active}
            previousClassName={paginateStyles.arrow}
            nextClassName={paginateStyles.arrow}
            disabledClassName={paginateStyles.disabled}
            breakClassName={paginateStyles.break}
            breakLabel="..."
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-white text-3xl font-inter">
            Para visualizar os produtos você precisa estar logado.
          </div>
          <Link to="/login" className="text-blue-500 hover:underline mt-4">
            Fazer Login
          </Link>
        </div>
      )}
    </div>
  );
}

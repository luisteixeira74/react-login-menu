import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { SearchInput } from './SearchInput';
import { useAuth  } from '../hooks/useAuth'

export function Header() {
  
  const { isAuthenticated, email, logout } = useAuth();
  const userEmail = email? email : 'Visitante';

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="absolute top-[70px] left-[40px] z-10 flex items-center space-x-16">
      {/* Logo com grayscale */}
      <div className="filter grayscale">
        <Logo />
      </div>

      {/* Menu de links alinhados verticalmente ao centro */}
      <nav className="flex items-center space-x-10 text-white text-[24px] font-inter">
        <Link to="/shopping" className="hover:text-gray-300 transition-colors cursor-pointer">
            SHOPPING
        </Link>

        <SearchInput />
        
        {isAuthenticated && (
          <div className="flex justify-between items-center text-white text-[16px] font-inter w-full max-w-md">
            <div>
              Bem vindo: {userEmail}
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
                  </button>
              </div>
          </div>
        )}

         {!isAuthenticated && (
        <Link to="/login" className="hover:text-gray-300 transition-colors cursor-pointer">
            LOGIN
        </Link>
         )}
      </nav>
    </div>
  );
}

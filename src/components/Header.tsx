import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { SearchInput } from './SearchInput';

export function Header() {
  return (
    <div className="absolute top-[70px] left-[40px] z-10 flex items-center space-x-16">
      {/* Logo com grayscale */}
      <div className="filter grayscale">
        <Logo />
      </div>

      {/* Menu de links alinhados verticalmente ao centro */}
      <nav className="flex items-center space-x-10 text-white text-[24px] font-inter">
        <Link to="/account" className="hover:text-gray-300 transition-colors cursor-pointer">
            ACCOUNT
        </Link>
        <Link to="/" className="hover:text-gray-300 transition-colors cursor-pointer">
            MEN
        </Link>
        <Link to="/women" className="hover:text-gray-300 transition-colors cursor-pointer">
            WOMEN
        </Link>
        <Link to="/kids" className="hover:text-gray-300 transition-colors cursor-pointer">
            KIDS
        </Link>

    <SearchInput />

        <Link to="/login" className="hover:text-gray-300 transition-colors cursor-pointer">
            LOGIN
        </Link>
</nav>

    </div>
  );
}

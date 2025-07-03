import { useState } from 'react';

export function SearchInput() {
  const [value, setValue] = useState('');

  return (
    <div
      className="flex items-center w-[204px] h-[58px] rounded-[24px] px-4"
      style={{ backgroundColor: '#949494' }}
    >
      {/* Ícone de lupa SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#5D5959"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
        />
      </svg>

      <input
        type="search"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search..."
        className="bg-transparent focus:outline-none flex-grow text-[24px]"
        style={{ color: '#5D5959' }}
      />
    </div>
  );
}


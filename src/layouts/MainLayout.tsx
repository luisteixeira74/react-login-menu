import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-[#1E1E1E] flex items-center justify-center overflow-hidden">
      {/* Div arredondada com fundo principal */}
      <div className="w-[1440px] h-[1024px] mx-auto relative overflow-hidden bg-[#2E2E2D] rounded-[48px]">
        
        <Header />

        {/* Elipses decorativas */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '308px',
            height: '290px',
            top: '172px',
            left: '233px',
            backgroundColor: '#D9D9D9',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '308px',
            height: '290px',
            top: '640px',
            left: '756px',
            backgroundColor: '#909090',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />

        <div className="absolute top-[172px] left-0 w-full h-[1px] bg-[#838181] opacity-50" />
        <div className="absolute bottom-[157px] left-0 w-full h-[1px] bg-[#838181] opacity-50" />

        <div className="relative z-10 mt-[130px] mb-[160px] px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

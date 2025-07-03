import './App.css'
import { AuthProvider } from './context/AuthContext'
import { LoginForm } from './components/LoginForm'
import { Logo } from './components/Logo'
import { Header } from './components/Header'

function App() {

  return (
    <>
    <AuthProvider>
      
    {/* Tela inteira com fundo escuro */}
<div className="min-h-screen w-full bg-[#1E1E1E] flex items-center justify-center overflow-hidden">
  
  {/* Área principal com dimensões fixas (frame Figma) */}
  <div className="w-[1440px] h-[1024px] mx-auto relative overflow-hidden bg-[#2E2E2D] rounded-[48px] flex items-center justify-center">
    <Header />

    <div className="absolute top-[70px] left-[40px] z-10 filter grayscale">
      <Logo />
    </div>

    {/* Elipse 1 (clara) */}
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: '308px',
        height: '290px',
        top: '172px',
        left: '233px',
        backgroundColor: '#D9D9D9',
        filter: 'blur(80px)',
        opacity: 0.2,
        zIndex: 0,
      }}
    />

    {/* Elipse 2 (escura) */}
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: '308px',
        height: '290px',
        top: '640px',
        left: '756px',
        backgroundColor: '#909090',
        filter: 'blur(80px)',
        opacity: 0.2,
        zIndex: 0,
      }}
    />
            
            {/* Caixa do login centralizada */}
            <div
              className="z-10 flex flex-col items-center p-8"
              style={{
                width: '553px',
                height: '440px',
                backgroundColor: '#909090',
                borderRadius: '42px',
              }}
            >
                <LoginForm />
            <div
              className="absolute"
              style={{
                width: '1440px',
                height: '1px',
                top: '172px',
                left: '0',
                backgroundColor: '#838181',
                opacity: 0.48,
              }}
            />
            <div
              className="absolute"
              style={{
                width: '1440px',
                height: '1px',
                top: '867px',
                left: '-5px',
                backgroundColor: '#838181',
                opacity: 0.48,
              }}
            />
            </div>
          </div>
        </div>
      </AuthProvider>
    </>
  )
}

export default App

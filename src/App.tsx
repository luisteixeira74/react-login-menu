import './App.css'
import { AuthProvider } from './context/AuthContext'
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LoginPage } from './pages/LoginPage';
import { MenPage } from './pages/MenPage';
import { WomenPage } from './pages/WomenPage';
import { KidsPage } from './pages/KidsPage';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        {/* Layout com menu, fundo etc */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/woman" element={<WomenPage />} />
          <Route path="/kids" element={<KidsPage />} />
        </Route>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App

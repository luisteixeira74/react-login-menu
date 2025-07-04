import './App.css'
import { AuthProvider } from './context/AuthContext'
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LoginPage } from './pages/LoginPage';
import { ShoppingPage } from './pages/ShoppingPage';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        {/* Layout com menu, fundo etc */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
        </Route>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App

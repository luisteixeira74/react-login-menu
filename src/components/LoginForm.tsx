import { useState, type FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';
import { InputEmail } from './InputEmail';
import { InputSenha } from './InputSenha';
import { AgreeCheckbox } from './AgreeCheckbox';

export function LoginForm() {
  const { isAuthenticated, login, logout } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      login(username, password);
      setUsername('');
      setPassword('');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated) {
    return (
      <div className="text-white text-center">
        <p className="mb-4">Você está logado!</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
    
       <div
        className="z-10 flex flex-col items-center p-8"
        style={{
          width: '553px',
          height: '440px',
          backgroundColor: '#909090',
          borderRadius: '42px',
        }}
      >
        
        <h1
        className="absolute text-black font-regular mt-4"
        style={{
            fontSize: '32px',
            width: '147px',
            height: '58px',
        }}
        >
        LOGIN
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col">
            <InputEmail
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            />
        </div>

        <div className="flex flex-col">
            <InputSenha
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-black text-white font-semibold hover:bg-gray-800 transition w-[162px] h-[47px] mt-auto mb-22"
          style={{
            borderRadius: '0px',
          }}
        >
            Login
            </button>

            <AgreeCheckbox />

        </form>
        </div>
    </>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === '123456') {
      localStorage.setItem('connected', 'true');
      navigate('/');
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-[#002f5f]">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 w-full max-w-md border border-[#002f5f]/10">
        <h2 className="text-3xl font-bold text-center mb-6">Connexion</h2>
        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-[#002f5f] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f5f]"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-[#002f5f] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f5f]"
          />
          <button
            type="submit"
            className="w-full bg-[#002f5f] text-white font-semibold py-2 rounded hover:bg-[#001f3f] transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

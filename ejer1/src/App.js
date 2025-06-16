import React, { useState } from 'react';
import Login from './componentes/login';
import Register from './componentes/registros';
import Peliculas from './componentes/Peliculas';
import './App.css';

function App() {
  const [vista, setVista] = useState('login');

  const handleLoginSuccess = () => {
    setVista('peliculas');
  };

  return (
    <div className="App">
      {vista === 'login' && <Login onSuccess={handleLoginSuccess} onChangeView={() => setVista('register')} />}
      {vista === 'register' && <Register onChangeView={() => setVista('login')} />}
      {vista === 'peliculas' && <Peliculas />}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  });

  const [message, setMessage] = useState('Chargement Application Moderne ...');

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.text))
      .catch(err => setMessage('Erreur lors du chargement de l\'API'))
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
    </div>
  );
}

export default App;

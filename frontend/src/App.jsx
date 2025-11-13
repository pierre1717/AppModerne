import React, { useEffect, useState } from 'react'

function App() {
  const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL
        })
  const [message, setMessage] = useState('Chargement application Moderne ...')
  

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.text))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
    </div>
  )
}

export default App

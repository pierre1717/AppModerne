import React, { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Chargement de l'application React +GO +')

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

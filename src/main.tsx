import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import App2 from './App2.tsx'
import App3 from './App3.tsx'
import App4 from './App4.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
  </React.StrictMode>,
)

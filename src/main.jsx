import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} />
        <Route path="/" element={<App />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

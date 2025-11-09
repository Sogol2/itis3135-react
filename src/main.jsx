import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'                 // Home page
import Introduction from './Introduction.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages */}
        <Route path="/" element={<Layout />}>
          {/* index = default child for "/" */}
          <Route index element={<App />} />
          <Route path="introduction" element={<Introduction />} />
          {/* catch-all */}
          <Route path="*" element={<div>404 — Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

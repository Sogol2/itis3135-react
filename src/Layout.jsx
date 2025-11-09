// src/Layout.jsx
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem 1.25rem' }}>
        <Outlet />   {/* child pages render here */}
      </main>
      <Footer />
    </>
  )
}

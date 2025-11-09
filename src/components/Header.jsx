import { NavLink } from 'react-router-dom'
const link = ({ isActive }) => ({ textDecoration:'none', color: isActive ? '#0a5fff' : '#54606e' })

export default function Header() {
  return (
    <header style={{ maxWidth: 900, margin: '3rem auto 1rem' }}>
      <h1>Sogol’s Sunny Macaw | ITIS 3135</h1>
      <ul style={{ margin: '.75rem 0 0', paddingLeft: '1.2rem' }}>
        <li><NavLink to="/" end style={link}>Home</NavLink></li>
        <li><NavLink to="/project-overview" style={link}>Project Overview</NavLink></li>
        <li><NavLink to="/introduction" style={link}>Introduction Form</NavLink></li>
      </ul>
      <hr style={{ border:0, borderTop:'1px solid #e5e7eb', marginTop:'1rem' }}/>
    </header>
  )
}

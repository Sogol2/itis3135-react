// src/components/Header.jsx
import { NavLink } from 'react-router-dom';

const link = ({ isActive }) => ({
  textDecoration: 'none',
  color: isActive ? '#0a5fff' : '#54606e'
});

export default function Header() {
  return (
    <header style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #eee" }}>
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
        Sogol’s Sunny Macaw | ITIS 3135
      </h1>

      <nav aria-label="Main">
        <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0 0", display: "flex", gap: "1rem" }}>
          {/* INTERNAL pages -> NavLink */}
          <li><NavLink to="/" end style={link}>Home</NavLink></li>
          <li><NavLink to="/introduction" style={link}>Introduction</NavLink></li>
          {/* EXTERNAL pages -> normal <a> with absolute URLs */}
          <li><a href="https://smaghzia.github.io/itis3135/" target="_blank" rel="noopener">Course Site</a></li>
          <li><a href="https://smaghzia.github.io/mascot/" target="_blank" rel="noopener">Mascot</a></li>
          {/* (Optional) remove the self-link "React App" or point to "/" */}
        </ul>
      </nav>
    </header>
  );
}

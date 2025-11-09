export default function Header() {
    return (
      <header style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
          Sogol’s Sunny Macaw | ITIS 3135
        </h1>
  
        <nav aria-label="Main">
          <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0 0", display: "flex", gap: "1rem" }}>
            <li><a href="/">Home</a></li>
            <li><a href="/itis3135/">Course Site</a></li>
            <li><a href="/mascot/">Mascot</a></li>
            <li><a href="/3135-react/">React App</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
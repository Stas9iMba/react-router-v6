import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2023</footer>
    </div>
  );
}

export { Layout };

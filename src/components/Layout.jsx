import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

function Layout() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  const setActiveNav = ({ isActive }) => ({
    color: isActive ? "var(--color-active)" : "",
  });
  return (
    <div>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <NavLink to="/posts" className={setActive}>
          Blog
        </NavLink>
        <NavLink to="/about" style={setActiveNav}>
          About
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2023</footer>
    </div>
  );
}

export { Layout };

import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      style={{ color: match ? "var(--color-active)" : "red" }}
      {...props}
    >
      {children}
    </Link>
  );
}

export { CustomLink };

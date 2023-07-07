import { Routes, Route, Link, Outlet } from "react-router-dom";

function Aboutpage() {
  return (
    <div className="container">
      <h1>About us</h1>
      <ul>
        <li>
          <Link to="contact">Our contact</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>
      <Outlet />
      {/* <Routes>
        <Route path="contact" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes> */}
    </div>
  );
}

export { Aboutpage };

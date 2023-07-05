import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

function Loginpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    signin(user, () => {
      navigate(fromPage, { replace: true });
    });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form action="" onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name: </label>
        <input type="name" id="name" name="username" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export { Loginpage };

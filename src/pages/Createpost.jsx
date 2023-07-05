import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
function Createpost() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Create a post</h1>
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        log out
      </button>
    </div>
  );
}

export { Createpost };

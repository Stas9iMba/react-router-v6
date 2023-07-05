import { Link } from "react-router-dom";

function Notfoundpage() {
  return (
    <div className="container">
      <h1>Not found</h1>
      <div>
        Go <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}

export { Notfoundpage };

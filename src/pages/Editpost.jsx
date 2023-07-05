import { useParams } from "react-router-dom";
function Editpost() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit a post {id}</h1>
    </div>
  );
}

export { Editpost };

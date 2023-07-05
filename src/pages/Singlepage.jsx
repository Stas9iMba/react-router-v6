import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Singlepage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/", { replace: true });
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [id]);
  return (
    <>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
          <Link to={`/blog/${id}/edit`}>Edit this post</Link>
          <button onClick={goBack}>go Back</button>
          <Link to="/">go Home</Link>

          {/* Bad practice */}
          <button onClick={goHome}>go Home</button>
        </div>
      )}
    </>
  );
}

export { Singlepage };

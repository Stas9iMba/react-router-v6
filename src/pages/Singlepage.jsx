import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Singlepage() {
  const { id } = useParams();
  const [post, setPost] = useState({});
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
          <Link to="/blog" style={{ color: "blue" }}>
            Back
          </Link>
        </div>
      )}
    </>
  );
}

export { Singlepage };

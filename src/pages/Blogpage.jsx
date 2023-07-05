import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blogpage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="container">
      <h1>Our news</h1>
      <Link to={"/blog/new"}>Add new post</Link>
      <div>
        {posts.map((post) => {
          return (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <li>{post.title}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export { Blogpage };

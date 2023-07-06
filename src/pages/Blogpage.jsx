import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BlockFilter } from "../components/BlockFilter";

function Blogpage() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");
  const startsForm = latest ? 80 : 1;

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
      <BlockFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to={"/blog/new"}>Add new post</Link>
      <div>
        {posts
          .filter(
            (post) =>
              post.title.toLowerCase().includes(postQuery.toLowerCase()) &&
              post.id >= startsForm
          )
          .map((post) => {
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

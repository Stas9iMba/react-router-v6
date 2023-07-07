import {
  Await,
  Link,
  defer,
  json,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { BlockFilter } from "../components/BlockFilter";
import { Suspense } from "react";

function Blogpage() {
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");
  const startsForm = latest ? 80 : 1;

  return (
    <div className="container">
      <h1>Our news</h1>
      <BlockFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to={"/blog/new"}>Add new post</Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <>
              {resolvedPosts
                .filter(
                  (post) =>
                    post.title
                      .toLowerCase()
                      .includes(postQuery.toLowerCase()) &&
                    post.id >= startsForm
                )
                .map((post) => {
                  return (
                    <Link to={`/blog/${post.id}`} key={post.id}>
                      <li>{post.title}</li>
                    </Link>
                  );
                })}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/postss");

  // if (!res.ok) {
  //   throw new Response("", { status: res.status, statusText: "Not found" });
  // }

  return res.json();
}

const blogLoader = async () => {
  // console.log({ request, params });
  const posts = await getPosts();

  if (!posts.length) {
    throw json(
      { message: "No posts found", reason: "Wrong URL" },
      { status: 404 }
    );
  }

  // return defer({
  //   posts: getPosts(),
  // });
  return {
    posts,
  };
};

export { Blogpage, blogLoader };

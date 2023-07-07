import { Suspense } from "react";
import {
  Await,
  Link,
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();
  return (
    <>
      {comments.map((comment) => (
        <>
          <h3>{comment.email}</h3>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </>
      ))}
    </>
  );
};

function Singlepage() {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div>
        <Suspense fallback={<h2>Post is loading...</h2>}>
          <Await resolve={post}>
            <Post />
          </Await>
        </Suspense>
        <Suspense fallback={<h2>Comments is loading...</h2>}>
          <Await resolve={comments}>
            <Comments />
          </Await>
        </Suspense>
        <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        <button onClick={goBack}>go Back</button>
        <Link to="/">go Home</Link>

        {/* Bad practice */}
        <button onClick={goHome}>go Home</button>
      </div>
    </>
  );
}

async function getPostsById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
async function getCommentsByPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json();
}

const postLoader = async ({ request, params }) => {
  console.log({ request, params });
  const id = params.id;

  return defer({
    post: await getPostsById(id),
    id,
    comments: getCommentsByPost(id),
  });
};

export { Singlepage, postLoader };

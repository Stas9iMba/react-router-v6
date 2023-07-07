import { Form } from "react-router-dom";

function NewPost({ submitting }) {
  return (
    <Form action="/posts/new" method="post">
      <h1>Create a post</h1>
      <label>
        Title: <input type="text" name="title" />
      </label>
      <label>
        Body: <input type="text" name="body" />
      </label>
      <input type="hidden" name="userId" value="1" />
      <input type="submit" value="Create Post" disabled={submitting} />
    </Form>
  );
}

export { NewPost };

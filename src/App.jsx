import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Blogpage, blogLoader } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { Singlepage, postLoader } from "./pages/Singlepage";
import { Createpost, createPostAction } from "./pages/Createpost";
import { Editpost, updatePostAction } from "./pages/Editpost";
import { Loginpage } from "./pages/Loginpage";

import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { Errorpage } from "./pages/Errorpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about/*" element={<Aboutpage />}>
        <Route path="contact" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Route>
      {/* Переадресация на страницу, без сохранения в историю браузера */}
      <Route path="about-us" element={<Navigate to="/about" replace />} />
      <Route
        path="posts"
        element={<Blogpage />}
        loader={blogLoader}
        errorElement={<Errorpage />}
      />
      <Route path="posts/:id" element={<Singlepage />} loader={postLoader} />
      <Route
        path="posts/:id/edit"
        element={<Editpost />}
        loader={postLoader}
        action={updatePostAction}
      />
      <Route
        path="post/new"
        action={createPostAction}
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Loginpage />} />
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

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
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";
import { Loginpage } from "./pages/Loginpage";

import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

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
      <Route path="blog" element={<Blogpage />} loader={blogLoader} />
      <Route path="blog/:id" element={<Singlepage />} loader={postLoader} />
      <Route path="blog/:id/edit" element={<Editpost />} />
      <Route
        path="blog/new"
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

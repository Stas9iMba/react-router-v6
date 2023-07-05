import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { Singlepage } from "./pages/Singlepage";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="blog/:id" element={<Singlepage />} />
          <Route path="blog/:id/edit" element={<Editpost />} />
          <Route path="blog/new" element={<Createpost />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

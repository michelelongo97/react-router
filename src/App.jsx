import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import PostsList from "./pages/PostsList";
import PageNotFound from "./pages/PageNotFound";

import DefaultLayout from "./layouts/defaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts-list" element={<PostsList />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

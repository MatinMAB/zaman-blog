//React-Router-Dom
import { Routes, Route } from "react-router-dom";

//Components
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";

export default function Router() {
 return (
  <>
   <Routes>
    <Route path="/" element={<BlogsPage />} />
    <Route path="/:slug" element={<BlogPage />} />
   </Routes>
  </>
 );
}

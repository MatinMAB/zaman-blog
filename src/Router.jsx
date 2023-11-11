//React-Router-Dom
import { Routes, Route } from "react-router-dom";

//Components
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

export default function Router() {
 return (
  <>
   <Routes>
    <Route path="/" element={<Blogs />} />
    <Route path="/:slug" element={<Blog />} />
   </Routes>
  </>
 );
}

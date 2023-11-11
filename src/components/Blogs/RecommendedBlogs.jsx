//React
import React, { useEffect, useState } from "react";

//Componets
import BlogCard from "../../shared/BlogCard";
import Loading from "../../shared/Loading";

//default axios
import axios from "axios";

export default function RecommendedBlogs({ blogs }) {
 const [recommendedBlogs, setRecommendedBlogs] = useState();

 useEffect(() => {
  setRecommendedBlogs(blogs);
 }, [blogs]);

 const handlePage = (url) => {
  url = url.replace("http", "https");
  axios.get(url).then(({ data }) => {
   setRecommendedBlogs(data.data);
  });
 };

 return (
  <div>
   {recommendedBlogs?.data ? (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
     {recommendedBlogs?.data.map((blog) => (
      <React.Fragment key={blog.id}>
       <BlogCard blog={blog} showDetails={true} />
      </React.Fragment>
     ))}
    </div>
   ) : (
    <Loading />
   )}

   <ul className="flex items-center justify-center gap-1 text-sm my-8 ">
    {recommendedBlogs?.links.map((link) => (
     <li key={link.label}>
      <button
       onClick={() => handlePage(link.url)}
       className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white ${
        link.active ? "bg-gray-800" : "bg-orange-500"
       } border border-gray-800 rounded-full disabled`}
      >
       <div dangerouslySetInnerHTML={{ __html: link.label }}></div>
      </button>
     </li>
    ))}
   </ul>
  </div>
 );
}

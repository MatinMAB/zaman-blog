//React
import React, { useEffect, useState } from "react";

//Componets
import BlogCard from "../../shared/BlogCard";
import Loading from "../../shared/Loading";
import Pagination from "../../shared/Pagination";

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
   <Pagination links={recommendedBlogs?.links} handlePage={handlePage} />
  </div>
 );
}

//React
import React from "react";

//Components
import Loading from "../../shared/Loading";
import BlogCard from "../../shared/BlogCard";

export default function MostVisitedBlogs({ blogs }) {
 return (
  <div>
   {blogs ? (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
     {blogs?.map((blog) => (
      <React.Fragment key={blog.id}>
       <BlogCard blog={blog} showDetails={false}/>
      </React.Fragment>
     ))}
    </div>
   ) : (
    <Loading />
   )}
  </div>
 );
}

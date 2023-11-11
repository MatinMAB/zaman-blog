//React-Icons
import { PiArticleFill } from "react-icons/pi";

//React-Router-DOM
import { Link } from "react-router-dom";

export default function BlogCard({ blog, showDetails }) {
 return (
  <div className="max-w rounded overflow-hidden">
   <Link to={`/${blog.slug}`}>
    <img
     className="object-fill h-56 w-full"
     src={blog.image}
     alt={blog.title}
    />
   </Link>
   <div className="w-full p-3 bg-slate-100 flex items-center justify-start gap-2 font-bold">
    <PiArticleFill className="text-orange-500 text-xl" />
    <span>
     <span className="text-orange-500">Article By</span>{" "}
     {blog.author.first_name} {blog.author.last_name}
    </span>
   </div>
   {showDetails && (
    <Link to={`/${blog.slug}`}>
     <div className="px-3 pt-4 font-bold text-xl line-clamp-2">
      {blog.title}
     </div>
    </Link>
   )}
   <div className="flex items-center justify-start divide-x-2 mx-1 my-2 text-sm text-gray-500">
    <div className="px-2">{blog.published_at}</div>
    <div className="px-2">{blog.read_time} min read</div>
    <div className="px-2">{blog.likes} likes</div>
    <div className="px-2 font-semibold">{blog.views} views</div>
   </div>
   {showDetails && (
    <div className="px-3 py-1 text-gray-700 text-base line-clamp-4">
     {blog.description}
    </div>
   )}
  </div>
 );
}

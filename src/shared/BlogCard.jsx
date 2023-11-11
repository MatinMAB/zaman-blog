//React-Icons
import { PiArticleFill } from "react-icons/pi";

export default function BlogCard({ blog }) {
 return (
  <div className="max-w rounded overflow-hidden">
   <img className="object-fill h-56 w-full" src={blog.image} alt={blog.title} />
   <div className="w-full p-3 bg-slate-100 flex items-center justify-start gap-2 font-bold">
    <PiArticleFill className="text-orange-500 text-xl" />
    <span>
     <span className="text-orange-500">Article By</span>{" "}
     {blog.author.first_name} {blog.author.last_name}
    </span>
   </div>
   {/* <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{blog.title}</div>
    <p className="text-gray-700 text-base">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
     quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
     nihil.
    </p>
   </div> */}
   {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
     #photography
    </span>
    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
     #travel
    </span>
    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
     #winter
    </span>
   </div> */}
   <div className="flex items-center justify-start divide-x-2 mx-1 my-4 text-sm text-gray-500">
    <div className="px-2">{blog.published_at}</div>
    <div className="px-2">{blog.read_time} min read</div>
    <div className="px-2">{blog.likes} likes</div>
    <div className="px-2 font-semibold">{blog.views} views</div>
   </div>
  </div>
 );
}

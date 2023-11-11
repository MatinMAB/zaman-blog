//React-Icons
import { AiTwotoneLike } from "react-icons/ai";

export default function BlogDetails({ blog }) {
 return (
  <div className="w-full bg-gray-900 h-auto p-6">
   <div className="container max-w-3xl mx-auto">
    <img
     className="object-fill w-full h-96"
     src={blog?.visual_content}
     alt={blog?.title}
    />
    <div className="my-4 text-white font-bold text-2xl line-clamp-2">
     {blog.title}
    </div>
    <div className="my-1 text-white text-sm">{blog.description}</div>
    <div className="flex items-center justify-start flex-wrap">
     <div className="flex items-center my-5">
      <img
       className="w-10 h-10 rounded-full z-10"
       src={blog.author.avatar}
       alt={blog.author.username}
      />
      <div className="font-medium text-white text-sm -ml-2">
       <div className="bg-slate-400 px-4 py-1">Jese Leos</div>
      </div>
     </div>
     <div className="flex items-center justify-start mx-1 my-2 text-sm text-gray-400">
      <div className="px-2 ">{blog.views} views</div>
      <div className="px-2">{blog.publish_date}</div>
      <div className="px-2 flex items-center justify-start gap-1">
       {blog.likes} <AiTwotoneLike />
      </div>
      <div className="px-2">{blog.read_time} min read</div>
     </div>
    </div>
   </div>
  </div>
 );
}

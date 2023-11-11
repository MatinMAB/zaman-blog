export default function BlogAuthor({ blog }) {
 return (
  <div className="container max-w-3xl mx-auto my-10">
   <div className="grid grid-cols-4">
    <div className="col-span-1 flex flex-col justify-center items-center gap-2">
     <img
      className="w-20 h-20 rounded-full z-10"
      src={blog.author.avatar}
      alt={blog.author.username}
     />
     <div className="text-xs flex flex-col justify-center items-center">
      <p>{blog.author.first_name}</p>
      <p>{blog.author.last_name}</p>
     </div>
    </div>
    <div className="col-span-3">
     <h4 className="text-gray-700 text-xl my-2">{blog.about_the_author}</h4>
     <p className="my-2 text-xs">
      Static Description cause of Can not find any Description for Author
     </p>
     <div className="mt-6 flex items-center gap-2 flex-wrap">
      <button className="bg-white text-gray-700 text-sm font-bold  px-6 py-1.5 border border-gray-500">
       FOLLOW +
      </button>
      <button className="bg-pink-400 text-white text-sm font-bold  px-6 py-1.5 border border-pink-400">
       BOOK A CALL
      </button>
      <button className="bg-white text-gray-700 text-sm font-bold  px-6 py-1.5 border border-gray-500">
       VIEW PROFILE
      </button>
     </div>
    </div>
   </div>
   <hr className="my-8" />
  </div>
 );
}

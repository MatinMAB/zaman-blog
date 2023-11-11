export default function BlogContent({ blog }) {
 return (
  <div className="container max-w-3xl mx-auto my-6">
   <div
    dangerouslySetInnerHTML={{ __html: blog.content }}
   ></div>
   <div className="flex justify-start items-center flex-wrap gap-2 my-6">
    {blog.tags.map((tag) => (
     <span
      key={tag.id}
      className="bg-gray-100 text-gray-800 text-sm font-medium  px-2.5 py-0.5 border border-gray-500"
     >
      #{tag.title}
     </span>
    ))}
   </div>
   <hr className="my-8"/>
  </div>
 );
}

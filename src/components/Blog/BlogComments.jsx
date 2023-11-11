//React
import { useEffect, useState } from "react";

//Components
import Pagination from "../../shared/Pagination";

//default Axios
import axios from "axios";

export default function BlogComments({ blog }) {
 const [comments, setComments] = useState();

 useEffect(() => {
  setComments(blog.reviews);
 }, [blog]);

 const handlePage = (url) => {
  url = url.replace("http", "https");
  axios.get(url).then(({ data }) => {
   setComments(data.data);
  });
 };

 return (
  <div className="container max-w-3xl mx-auto my-10 ">
   <h2 className="font-bold text-xl">Comments</h2>
   {comments?.data.map((review) => (
    <div key={review.id} className="p-6 border border-gray-100 my-1">
     <div className=" flex items-center gap-2">
      <img
       className="w-12 h-12 rounded-full"
       src={review.writer.avatar}
       alt={review.writer.username}
      />
      <div>
       <p className="text-xs">
        {review.writer.first_name} {review.writer.last_name}
       </p>
       <p className="text-xs text-gray-400">{review.posted_on}</p>
      </div>
     </div>
     <p className="mt-3 text-xs">{review.content}</p>
    </div>
   ))}
   <Pagination links={comments?.links} handlePage={handlePage} />
  </div>
 );
}

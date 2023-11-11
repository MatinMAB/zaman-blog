//React
import { useEffect, useState } from "react";

//Components
import MostVisitedBlogs from "./MostVisitedBlogs";

//Axios
import Axios from "../../../axios.config";

export default function Blogs() {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  Axios.get("/articles")
   .then(({ data }) => {
    console.log(data.data);
    setPosts(data.data);
   })
   .catch((error) => {
    throw new Error(error.message);
   });
 }, []);

 return (
  <div className="container mx-auto p-4">
   <h2 className="my-4 text-3xl font-bold">Most Visited</h2>
   <MostVisitedBlogs blogs={posts.most_visited} />
  </div>
 );
}

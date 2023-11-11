//React
import { useEffect, useState } from "react";

//React-Router-DOM
import { useParams } from "react-router-dom";

//Axios
import Axios from "../../../axios.config";

//Components
import Loading from "../../shared/Loading";
import BlogDetails from "./BlogDetails";
import BlogContent from "./BlogContent";
import BlogAuthor from "./BlogAuthor";
import BlogComments from "./BlogComments";

export default function Blog() {
 const [blog, setBlog] = useState();
 const params = useParams();

 useEffect(() => {
  Axios.get(`/articles/${params.slug}`)
   .then(({ data }) => {
    console.log(data.data.article);
    setBlog(data.data.article);
   })
   .catch((error) => {
    throw new Error(error.message);
   });
 }, []);
 return (
  <>
   {blog ? (
    <>
     <BlogDetails blog={blog} />
     <BlogContent blog={blog} />
     <BlogAuthor blog={blog}/>
     <BlogComments blog={blog}/>
    </>
   ) : (
    <Loading />
   )}
  </>
 );
}

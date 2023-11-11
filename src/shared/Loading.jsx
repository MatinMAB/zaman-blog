//React-Spinner
import ClipLoader from "react-spinners/PropagateLoader";

export default function Loading() {
 return (
  <div className="container mx-auto flex items-center justify-center h-auto m-6">
   <ClipLoader
    color="#000"
    loading="true"
    size={25}
    aria-label="Loading Spinner"
    data-testid="loader"
   />
  </div>
 );
}

import { Link } from "react-router-dom";
import HeadForm from "./HeadForm";

function NoMatch404() {
   document.title = "404 Not Found"
   return (
      <>
         <HeadForm name="404" />
         <nav className="text-align-center"><Link to={'/'}>home</Link></nav>
      </>
   )

}

export default NoMatch404;
import { Link, Outlet} from "react-router-dom"
import HeadForm from "../Component/HeadForm"

export const SecondPage = () => {
   document.title = "Second Page"
   return (
      <>      
         <HeadForm name="Second Page" />
         <section className="container">
            <nav>
               <ul>
                  <li><Link to={'/second-Page/Page1st'}>2nd-Child-111</Link></li>
                  <li><Link to={'/second-Page/Page2nd'}>2nd-Child-222</Link></li>
                  <li><Link to={'/second-Page/Page3rd'}>2nd-Child-333</Link></li>
                  <li><Link to={'/second-Page/Page4th'}>2nd-Child-444</Link></li>
                  <li><Link to={'/second-Page/Page5th'}>2nd-Child-555</Link></li>
                  <li><Link to={'/second-Page/Page6th'}>2nd-Child-666</Link></li>
               </ul>
            </nav>
            <Outlet />
         </section>
      </>
   )
}
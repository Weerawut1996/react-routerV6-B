import { Link, Outlet} from "react-router-dom"
import HeadForm from "../Component/HeadForm"

export const FirstPage = () => {
   document.title = "FirstPage"
   return (
      <>
         <HeadForm name="FirstPage"/>
         <section className="container">
            <nav>
               <ul>
                  <li><Link to={'/First-Page/Page1st'}>1st-Child-111</Link></li>
                  <li><Link to={'/First-Page/Page2nd'}>1st-Child-222</Link></li>
                  <li><Link to={'/First-Page/Page3nd'}>1st-Child-333</Link></li>
                  <li><Link to={'/First-Page/Page4th'}>1st-Child-444</Link></li>
                  <li><Link to={'/First-Page/Page5th'}>1st-Child-555</Link></li>
                  <li><Link to={'/First-Page/Page6th'}>1st-Child-666</Link></li>
               </ul>
            </nav>
            <Outlet />
         </section>
      </>
   )
}
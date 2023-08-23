
import { Link, Outlet, Route, Routes } from "react-router-dom"
import FooterForm from './Component/FooterForm'
import './Css/App.css'
import mainicon from './icon/vite.svg'
import HomePage from './Page/HomePage'//export default
import NoMatch404 from './Component/NoMatch404'//export default
import { About } from './Page/About'//export const 
import { DashBoard } from './Page/DashBoard'//export const 
import { FirstPage } from "./Page/FirstPage"
import { SecondPage } from "./Page/SecondPage"
import { FirstPageChild_1st, FirstPageChild_2nd, FirstPageChild_3rd } from "./Page/FirstP_Child_A"
import { FirstPageChild_4th, FirstPageChild_5th, FirstPageChild_6th } from "./Page/FirstP_Child_B"
import { SecondPageChild_1st, SecondPageChild_2nd, SecondPageChild_3rd } from "./Page/SecondP_Child_A"
import { SecondPageChild_4th, SecondPageChild_5th, SecondPageChild_6th } from "./Page/SecondP_Child_B"

function App() {
   
   document.getElementById('icon').setAttribute('href',mainicon);
   return (
      <>
         <DisplayRoutes />
         <FooterForm />
      </>
   )
}
export default App

function pageRandom(length) {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   let counter = 0;
   while (counter < length) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
     counter += 1;
   }
   return result;
}


const MainNavbar = () => {
   return (
      <>
         <nav >
            <ul className="main-navbar">
               <li><Link to={'/'}>Home</Link></li>
               <li><Link to={'about'}>About</Link></li>
               <li><Link to={'dashboard'}>Dashboard</Link></li>
               <li><Link to={'first-Page'}>First-Page</Link></li>
               <li><Link to={'second-Page'}>Second-Page</Link></li>
               <li><Link to={`${pageRandom(Math.floor(Math.random() * 20))}`}>No Match</Link></li>
            </ul>
         </nav>
         <Outlet />
      </>
   )
}

const DisplayRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MainNavbar />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="first-Page" element={<FirstPage />} >
               <Route path="Page1st" element={<FirstPageChild_1st />} />
               <Route path="Page2nd" element={<FirstPageChild_2nd />} />
               <Route path="Page3nd" element={<FirstPageChild_3rd />} />
               <Route path="Page4th" element={<FirstPageChild_4th />} />
               <Route path="Page5th" element={<FirstPageChild_5th />} />
               <Route path="Page6th" element={<FirstPageChild_6th />} />
            </Route>
            <Route path="second-Page" element={<SecondPage />} >
               <Route path="Page1st" element={<SecondPageChild_1st />} />
               <Route path="Page2nd" element={<SecondPageChild_2nd />} />
               <Route path="Page3rd" element={<SecondPageChild_3rd />} />
               <Route path="Page4th" element={<SecondPageChild_4th />} />
               <Route path="Page5th" element={<SecondPageChild_5th />} />
               <Route path="Page6th" element={<SecondPageChild_6th />} />
            </Route>
         </Route>
         {/* Using path="*"" means "match anything". */}
         <Route path="*" element={<NoMatch404 />}></Route>
      </Routes>
   )
}
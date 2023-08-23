import HeadForm from "../Component/HeadForm";

function HomePage() {
   document.title = "Home Page"
   return (
      <>
         <HeadForm name="Home"/>
         <section className="OnlyContant">
            <h2>Home Page</h2>
         </section>
      </>
   )
}
export default HomePage;
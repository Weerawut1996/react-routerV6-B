import HeadForm from "../Component/HeadForm"

export const DashBoard =()=>{
   document.title = "Dash Board Page"
   return(
      <>
      <HeadForm name = "DashBoard"/>
      <section className="OnlyContant">
            <h2>DashBoard Page</h2>
      </section>
      </>
   )
}
import HeadForm from "../Component/HeadForm"

export const About = () => {
   document.getElementById('icon').setAttribute('href','');
   document.title = "About Page"
   return (
      <>
         <HeadForm name="About" />
         <section className="OnlyContant">
            <h2>About Page sssssssssssssssssssssssssssssssssssssss</h2>
         </section>
      </>
   )
}
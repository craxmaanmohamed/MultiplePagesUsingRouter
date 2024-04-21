import { useState } from "react";
import "./About.css"
import AboutImg from "/images/04.jpg"
function About({isBackrounImag}){
  return(
    <section id="Aboutsection" className="Aboutsection">
        {/* hadii isBackrounImag uu trou yahay "" emty tosi pageka Home ka ah hadii akle tusi imageka*/}
        {isBackrounImag?"": 
        <div className="AboutimgBackround">
            <h2>About Page</h2>

        </div>}
 
    <h1 className="page-Name-H">About <span>Me</span> </h1>
    <div className="AboutTextImg">
      <div>
      <img src={AboutImg}  alt="About Image" height="450px" width="450px"></img>
      </div>

     <div>
     <p className="AboutP">
     Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem 
Ipsum has been the industry's standard 
dummy text ever since the 1500s, when an 
unknown printer took a galley of type and 
     </p>
  
     <button className="learnMore">Learn More</button>
        
        </div>
 


    </div>
</section>

  )
}
export default About;

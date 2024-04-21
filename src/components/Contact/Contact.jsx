
import "./Contact.css"
function Contact({isBackrounImag}){
  return(
        <section id="ContactSection" className="ContactSection">
            {isBackrounImag ?"": 
            <div className="contactimgBackround">
                <h2>Contact Page</h2>

            </div>}

            {/* {isBackrounImag?"":<img className="contactimgBackround" src="public/images/contactimgBackround.jpg" alt="contactimgBackround" />} */}

        <div className="midleContactSection">
            <div>
            <h1 className="page-Name-H"><span>Contact</span> Me </h1>
           <div className="contactContianer">
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Email"></input>
            <textarea placeholder="Message.."></textarea>
            <button className="SEND">SEND</button>
           </div>
            </div>
       
        </div>
           
        </section>

    )
}
export default Contact

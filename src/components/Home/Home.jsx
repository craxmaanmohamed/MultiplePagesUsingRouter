import "./Home.css";
import HomeImg from '/images/Homeimg.png'
import Contact from "../Contact/Contact";
import About from "../About/About";
function Home(){
    return(
      <section id="Homesection" className="Homesection">
      <div  className="TextDivHome">
      <img className="myimg" src ={HomeImg}  alt="Home Image"   height="300" width="300" />
      <h1 style={{fontSize:"25px"}}>Hi I’m <span className="span"> C/raxmaan</span></h1>
      <h1 className="HLarger" >web developer</h1>
      <p className="Hp">Web developers design, maintain, and optimize websites and other 
        web-based applications<br/> for consumer use. so let's start together!</p>

      <button className="Startwithme" > Start with me   </button>
   

      </div>
      <About isBackrounImag={true}/> // isBackrounImag oo  trou ah upass gareey
      <Contact isBackrounImag={true}/>


     
      </section>
    )
}
export default Home;
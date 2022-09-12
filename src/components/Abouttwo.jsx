import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
function Abouttwo (){
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);


    return (
        <div   className="abouttwo">
        <div className="abtall">
        <div data-aos="flip-right"  className="abtimg">
        <img src="photos/prince.jpg"></img>
        <h2>The CEO</h2>
        </div>
         <div data-aos="fade-left"  className="abttwo">
          <h2>Our Story</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
     type specimen book. It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem 
         Ipsum is not simply random text. It has roots in a piece of classical Latin
               literature from 45 BC, making it over 2000 years old. Richard McClintock, 
              
                   </p>
          </div>
        </div>


         {/* <div className="visionboth"> */}
            <div className="visionhead">
                <div className="vision">
                <div className="vision1">
                <h2>Our Vision</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
             type specimen book. It has survived not only five centuries, </p>
                </div>
                </div>
                
                <div className="mision"> 
                <div className="mision1">               
                <h2>Our Mission</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
             type specimen book. It has survived not only five centuries, </p>
                </div>
            </div>
         </div>

         </div>
    )
}

export default Abouttwo;
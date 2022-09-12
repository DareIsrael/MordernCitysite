import React,{useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";




function Contacttwo (){
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);

    return (
        <div    className="contact0">
            <div data-aos="fade-up" className="contact1">
            
            <div data-aos="flip-right"  className="contact2">
            
                <h2>Let's Talk</h2>
                <p>We know buying a home is one of the most important events in your life, and we appreciate you considering Vava Projects.

Whether you’re a first-time homebuyer, have further questions that you want answers for, or are not even sure if homeownership is for you, we’d love to talk to you!

Prefer an email, a phone call, or even an inspection? Let us know what works best for you, and we can make it happen.

Contact Form
 </p>
            </div>


         <div data-aos="fade-left"  className="contact3">
         <form  action="" method="post" >
          <label>Your Name</label>
          <input type="text" placeholder="Your Name"></input>
          <labe>Your Email</labe>
          <input type="text" placeholder="Your Email"></input>
          <label>Your Message</label>
          <textarea placeholder="Drop a message for us"></textarea>
          <button type="submit">Submit</button>

         </form>

            </div>    
            </div>

        </div>
    )
        
    
}

export default Contacttwo;
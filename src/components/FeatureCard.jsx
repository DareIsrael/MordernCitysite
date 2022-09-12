import React, { useEffect } from "react";
import "./Location.jsx";
import Heading from "./Heading";
import { FaHouseUser, FaLaptopHouse } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";


function FeatureCard () {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);



    return (
        
        
        <section  id="bros" data-aos="fade-up" className="background">
        <Heading 
        title="Featured Property Types"  
        subtitle= " Find all types of Property."
        />
        <div className="grid4">
        <div className= "boxes">
        <img className="img" src="photos/icons8-bungalow-96(1).png "></img>
        <h4>Family house</h4>
        <p> 122 Property</p>
        </div>
        <div className="boxes">
        <img className="img" src="photos/icons8-country-house-96(1).png "></img>
        <h4>Country House</h4>
        <p>155 Property</p>
        </div>
        <div className="boxes">
        <img className="img" src="photos/icons8-home-96.png "></img>
        <h4>House & Villa</h4>
        <p>300 Property</p>
        </div> 
        <div className=" boxes">
        <img className="img" src="photos/icons8-real-estate-96(1).png"></img>
        <h4>Garman House</h4>
        <p>300 Property</p>
        </div> 
        {/* <div className="boxes">
        <img src="photos/icon3.jpg" alt=""></img>
        <h4>Apartment</h4>
        <p>300 Property</p>
        </div> 
        <div className="boxes">
        <img src="photos/icon3.jpg" alt=""></img>
        <h4>Apartment</h4>
        <p>300 Property</p>
        </div>  */}
        </div>
        


            
        </section>
       
        
        
        


        
    )
}
export default FeatureCard;
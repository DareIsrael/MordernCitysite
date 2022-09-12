import React, { useEffect } from "react";
import Feature from "./Feature";
import FeatureCard from "./FeatureCard";
import Heading from "./Heading";
import "./home.css";
import HomeInput from "./HomeInput";
import Recent from "./Recent";
import Awards from "./Awards"
import Location from "./Location"
import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-bootstrap/Carousel';
import Strenght from "./Strenght";
import Bright from "./Bright";

// import { useEffect } from "react";


function Home () {
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
     <section className="hero">
      <video className="vid" src="photos/video.mp4" autoPlay loop muted />
  

     <HomeInput />
    
     <FeatureCard />
     
     
     <Recent />
     
    
     <Awards />
     
     
     <Location />
    
    
    <Team />
    <Strenght />
    <Bright />
     
     
     
    
     
     
     

     </section>
        
    )
}

export default Home;
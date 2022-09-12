import React, {useEffect} from "react"
import Heading from "./Heading"
import { GiTrophyCup } from 'react-icons/gi';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { FaLightbulb } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import AOS from "aos";
import "aos/dist/aos.css";

function Awards(){
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);

    return (
     <section data-aos="zoom-in"  className="grid7">
        <div  className="Awards">
        <Heading 
            title="Over 1,24,000+ Happy Users being with us, still  they love our service"
            subtitle="Our Awards"
        />
        <div className="gifts">
            <div className="gibox">
            <GiTrophyCup className="Gcon"/>
             <h2>32M</h2>
             <p>Blue Burmin Award</p>
            </div>
            <div className="gibox">
            <RiShoppingBag3Fill className="Gcon"/>
             <h2>43M</h2>
             <p>Blue Burmin Award</p>
            </div>
            <div className="gibox">
            <FaLightbulb className="Gcon"/>
             <h2>51M</h2>
             <p>Blue Burmin Award</p>
            </div>
            <div className="gibox">
            <AiFillHeart className="Gcon"/>
             <h2>60M</h2>
             <p>Blue Burmin Award</p>
            </div>
            

        </div>
        

        </div>

     </section>


    )
}

export default Awards;
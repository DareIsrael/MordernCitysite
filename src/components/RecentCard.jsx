import React, {useEffect} from "react"
import Heading from "./Heading";
import Recent from "./Recent";
import AOS from "aos";
import "aos/dist/aos.css";

function RecentCard () {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);
    return (
     <section  data-aos="fade-right" className="recent tob">
     <div  className="container">
           <Heading 
            title="Recent Property List"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
           />

        <Recent />     
     </div>


     </section>
       

    

    )
}

export default RecentCard;
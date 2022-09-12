import React, { useEffect } from "react"

import Heading from "./Heading";

import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";


function Recent () {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);
    
    
    return ( 
        <section data-aos="flip-right" className="grid2">
        <div className="grid6">
           <Heading 
            title="Recent Property List"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
           />
        
        <div className="grid3">
       
        <Card 
           
            img= " photos/one.jpg"
            name ="Detached"
            // span="🖤 "
            body= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            price="$98,000"
            
           
        
         />
         

            <Card 
            img= " photos/two.jpg"
            name ="S-Detached"
            body ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            price="$82,000"
             />

            <Card 
            img= " photos/three.webp"
            name ="Bungalow"
            body ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            price="$90,000"
             />

            <Card 
            img= " photos/four.jpg"
            name ="Castle"
            body ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            price="$79,000"
             />

            <Card 
            img= " photos/five.jpg"
            name ="Hostel"
            body ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            price="$99,000"
              />

            <Card 
            img= " photos/six.jpg"
            name ="Apartment"
            body ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            price="$96,000"
              />

           
         





        {/* <Bcards img="photos/home.avif"/>
        <Bcards img="photos/home.avif"/>
        <Bcards img="photos/home.avif"/>
        <Bcards img="photos/home.avif"/>
        <Bcards img="photos/home.avif"/>
        <Bcards img="photos/home.avif"/> */}

    </div>

    </div>
        

        </section>
      
        
    )
}

export default Recent;
import React, { useEffect } from "react"
import Heading from "./Heading";
import TeamCard from "./TeamCard";
import AOS from "aos";
import "aos/dist/aos.css";

function Team () { 
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);

    return (
       <section data-aos="fade-left" className="grid9">
       <div>
       <Heading 
        title = "Our Features Agents"
        subtitle ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
       />

       <div className="teamGrid">
       <TeamCard data-aos="fade-left"
        team= "Team1"
        TeamImage = "photos/team.jpg"
        teamName="👨🏾‍⚕️Prince"
        contact="☏07022443355"
        email="📩prince@yahoo.com"
       
       />
       <TeamCard data-aos="fade-right"
        team= "Team1"
        TeamImage = "photos/team.jpg"
        teamName="👨🏾‍⚕️Prince"
        contact="☏07022443355"
        email="📩prince@yahoo.com"
       />
       <TeamCard 
        team= "Team1"
        TeamImage = "photos/team.jpg"
        teamName="👨🏾‍⚕️Prince"
        contact="☏07022443355"
        email="📩prince@yahoo.com"
       />
       {/* <TeamCard 
        team= "Team1"
        TeamImage = "photos/team.jpg"
        teamName="👨🏾‍⚕️Prince"
        contact="☏07022443355"
       />
       <TeamCard 
        team= "Team1"
        TeamImage = "photos/team.jpg"
        teamName="👨🏾‍⚕️Prince"
        contact="☏07022443355"
       />
       <TeamCard 
        team= "Team1"
        TeamImage = "photos/team.jpg"
        teamName="👨🏾‍⚕️Prince"
        contact="☏07022443355"
       /> */}

       </div>
       

       </div>

       </section>

    )
}

export default Team;
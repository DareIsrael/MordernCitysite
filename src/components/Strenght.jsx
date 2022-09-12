import React, {useEffect} from "react"
import Heading from "./Heading"
import { FaHandPeace, FaHandsWash, FaHandsHelping,  FaGolfBall, FaUserCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Strenght () {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);

    return (
        <section data-aos="zoom-in"   className="grid10">
            <div className="strenght">
            <Heading 
                title = "Our Strenght"
                subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry "
            />
            <div className="st-In">
            <div className="one">
                <FaUserCheck  className="three"/>
                <h2 className="two">Integrity</h2>
                <p>As a team, we believe that integrity is absolutely fundamental to success in real estate. We have showcased this in all our building policies, knowing fully well that honesty and transparency are essential. No compromise! </p>
            </div>
            <div className="one">
            <FaGolfBall  className="three"/>
            <h2 className="two">Innovation</h2>
            <p>Beyond the traditional approach, we are big on developing new insights and approaches to tackling challenges through creative thinking and deploying state-of-the-art facilities to all our homes. It’s just a way of going the extra mile for your comfort.</p>
            </div>
            <div className="one">
            <FaHandsHelping  className="three"/>
            <h2 className="two">Quality</h2>
            <p>For once, you can rest assured of the quality of homes been built. Before setting out, we resolved to beat the status quo and provide the best: nothing but the best. </p>
            </div>
            <div className="one">
                <FaHandsWash  className="three"/>
                <h2 className="">Customer Satisfaction</h2>
                <p>We are big on offering immense value to our customers. While we advise our customers to have an expectation, we at Vava projects are addicted to exceeding our customer’s expectations, and we are not stopping anytime soon. </p>
            </div>
            <div className="one">
                <FaHandPeace className="three"/>
                <h2 className="two">Dedication </h2>
                <p> This is what we are cut out to do: to deliver superior elegance and add a finesse touch to real estate in the country. We put our heart into it because we know the price for comfort.</p>
            </div>
            </div>

            </div>
        </section>
    )
}

export default Strenght;
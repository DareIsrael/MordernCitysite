import React from "react";
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

function Bright () {
    return (
        <section className="grid11"> 
        <div className="copy">
        <h6><span className="navB"><img className="navImg" src="photos/icons8-home-96.png"></img> Modern</span>City</h6>
        {/* <h6><span className="navB"><img className="navImg" src="photos/icons8-home-96.png"></img>Modern</span>City</h6> */}
        <p> Copyright ©2022, Bright Projects Ltd. All Rights Reserved. Website Design by Brightweb. </p>
        <span className="navA"> ☎︎ 07030661043</span>
        <div className="conicon">
        <IoLogoWhatsapp className="con"/>
        <BsFacebook className="con"/>
        <FaTwitter className="con"/>
        </div>
        
        </div>
        
        </section>
    )
}

export default Bright;
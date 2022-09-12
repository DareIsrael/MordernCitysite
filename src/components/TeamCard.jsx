import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import AOS from "aos";
import "aos/dist/aos.css";

function TeamCard (props) {
    useEffect(() => {
        AOS.init({duration: 2000 });
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-left"  className='TeamCard'>
            <div className="team">
       <Button variant="warning">{props.team}</Button>
        <div className='details'>
            <div className='detImg'>
            <div className='img'>
            <img  src={props.TeamImage}></img>
            <h5 className='deth5'>{props.teamName} </h5>
            </div>
            
            <div className='detpad'>
            <h5>{props.teamName} <span style={{paddingLeft: "60%"}}>🖤</span></h5>
            <p>{props.contact}</p>
            <p>{props.email}</p>
            </div>
            
            </div>
        </div>

       </div>
        </div>
    )
}

export default TeamCard;
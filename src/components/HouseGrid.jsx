import React from "react";

function HouseGrid (props) {
    return (
        <div className="card">
         <img src={props.img} alt=""></img>
            
            <div className="boxes">
       
        <h4>{props.h4}</h4>
        <p>{props.para}</p>
        </div>
        </div>
    )
}
export default HouseGrid;
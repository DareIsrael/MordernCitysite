import React from "react"

function LocationCard(props) {
    return (
          <div className="LocationCard">
           <img src={props.img}></img>
            <div className="overlay">
             <a  href={props.link} ><h5>{props.body}</h5> </a>
             <p>{props.Label}</p>
             <p>{props.para}</p>
             <p>{props.others}</p>
            </div>
          </div>
    )
}

export default LocationCard;
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';







function Card (props) {
    



  return (
        
      
      <div className="card">
      
      <img src={props.img} className="card__img"   />
      <div className="card__body">
      <h2  className="card__title">{props.name} <span style={{paddingLeft: "60%"}}>🖤</span>   </h2>
      
      <p className="card__description">{props.body}  </p>
      
      {/* <button style={{backgroundColor: "brown", borderRadius: "20%", width: "80px"}}>{props.price}</button> */}
      <Button className="cardbtn" >{props.price}</Button>
      
    
      
    
      
      </div>


      </div>
  );

}

export default Card;
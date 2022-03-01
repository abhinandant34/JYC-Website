import React from "react";
import "./Environmentcards.css";



function Card({ src, title, designation,eMail,Phone, width = "16vw", height = "15vw" }) {
  return (
    

    // {FACULTY 1 CARD}
    <div className="Card"  style={{ width: width, height, height }}>
      <div className="Header">
        <div><img
          className="img Img"
          src={src} 
        />
        </div>
        <div id="Envbody" className="body Body">
        <div   className="FacultyName FacName" >{title}</div>
        <div ><div  className="Details FacDetails">{designation}</div>
        <div  className="Details FacDetails">{eMail}</div>
        <div  className="Details FacDetails">{Phone}</div>
        </div>
      </div>
    </div>
      

     
    </div>
  );
}

export default Card;
import React from "react";
import "./character.css";
const Character = (props) => {
  return (
    <>
      <div className="characterCard">

      <div className="images">
          <div className="imgname">
            {/* <span>{props?.image}</span> */}
          </div>
          <div>
            <img src={`${props.imageUrl}`}></img>
          </div>
        </div>

        <div className="details">
          <h2>ID : {props?.id}</h2>
          <br />
          <span>First Name : {props?.firstName}</span>
          <br />
          <span>Last Name : {props?.lastName}</span>
          <br />
          <span>Full Name : {props?.fullName}</span>
          <br />
          <span>Title : {props?.title}</span>
          <br />
          <span>Family : {props?.family}</span>
          <br />
        </div>
        
      </div>
    </>
  );
};

export default Character;

import React from "react";
import "./character.css";
const Character = (props) => {
  return (
    <>
      <div className="characterCard">
        <div className="details">
          <span>ID : {props?.id}</span>
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
        <div className="image">
        <div className="imgname"><span>{props?.image}</span></div>
        <div><img src={`${props.imageUrl}`}></img></div>
        </div>
      </div>
    </>
  );
};

export default Character;

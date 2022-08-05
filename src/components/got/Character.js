import React from "react";

const Character = (props) => {
  return (
    <>
      <div className="characterCard">
        <div className="details">
          <span>ID : {props?.id}</span>
          <span>First Name : {props?.firstName}</span>
          <span>Last Name : {props?.lastName}</span>
          <span>Full Name : {props?.fullName}</span>
          <span>Title : {props?.title}</span>
          <span>Family : {props?.family}</span>
          <span>Image : {props?.image}</span>
        </div>
        <div className="image">
          <img src={`props.imageUrl`}></img>
        </div>
      </div>
    </>
  );
};

export default Character;

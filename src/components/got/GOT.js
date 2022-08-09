import React from "react";
import Axios from "axios";
import { useState } from "react";
import "./got.css";
import Character from "./Character";


const GOT = () => {



  
  const [characters, setCharacters] = useState(null);
  const fetchData = () => {
    Axios.get(`https://thronesapi.com/api/v2/Characters`).then((res) => {
      setCharacters(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="container">
      <div className="got">
        <button onClick={fetchData}>List Game of Thrones Characters</button>
      </div>
      {characters !== null && <div className="viewer">
        {characters.map( (we) => (
          <Character
            key={we?.id}
            id={we?.id}
            firstName={we?.firstName}
            lastName={we?.lastName}
            fullName={we?.fullName}
            title={we?.title}
            family={we.family}
            image={we?.image}
            imageUrl={we?.imageUrl}
          />
        ))}
      </div>}
    </div>
  );
};

export default GOT;

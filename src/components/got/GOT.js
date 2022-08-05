import React from 'react'
import { Axios } from 'axios'
import { useState } from 'react';
import './got.css'
import Character from './Character';


const GOT = () => {


    const [characters, setCharacters] = useState({});
    const fetchData = () =>{

        Axios.get(`https://thronesapi.com/api/v2/Characters`).then((res)=>{
            setCharacters(res);
            console.log(res);
        })
    }
  return (
    <>
        <div className='got'><button onClick={fetchData}>wow</button></div>
        {/* <h3>{characters.map((per) => (<Character key={Character.id} />))}</h3> */}
        
    </>
  )
}

export default GOT;
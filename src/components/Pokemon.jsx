import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pokemon = ({pokemon, index}) => {

  const [sprite,setSprite]=useState("");

  useEffect(()=>{
    axios.get(pokemon[index].url)
    .then(response=>setSprite(response.data.sprites.front_default));
  },[])

    //Para la fichas: response.data.sprites.other["official-artwork"].front_default 
    //Para las cartas: response.data.sprites.front_default
  
  return (
    <>
      <div className='container-card'>
        <div className='card'>
          <h3 className='pokemon-name'>{pokemon[index].name.substring(0,1).toUpperCase()+pokemon[index].name.substring(1).toLowerCase()}</h3>
          <img src={sprite} alt="" width={"100px"} className='pokemon-image'/>
        </div>
      </div>
    </>
  )
}

export default Pokemon;
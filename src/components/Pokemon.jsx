import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pokemon = ({pokemon, index, setShowPokemon, setIndice}) => {

  const [info,setInfo]=useState("");
  const [sprite,setSprite]=useState("");

  useEffect(()=>{
    axios.get(pokemon[index].url)
    .then(response => {
      setInfo(response.data);
      setSprite(response.data.sprites.front_default);
    })
  },[])

    //Para la fichas: response.data.sprites.other["official-artwork"].front_default 
    //Para las cartas: response.data.sprites.front_default
  
    const openCard = (index)=>{
      setShowPokemon(true);
      setIndice(index)
    }



  return (
    <>
      <div className='container-card' onClick={()=>openCard(index)}>
        <div className='card'>
          <h3 className='pokemon-name'><span>#{info.id}</span>{pokemon[index].name.substring(0,1).toUpperCase()+pokemon[index].name.substring(1).toLowerCase()}</h3>
          <img src={sprite} alt={info.id} width={"100px"} className='pokemon-image'/>
        </div>
      </div>
    </>
  )
}

export default Pokemon;
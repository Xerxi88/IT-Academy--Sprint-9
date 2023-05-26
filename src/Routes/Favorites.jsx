import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../Context'
import axios from 'axios'

const Favorites = () => {

  const {favorites,setFavorites}=useContext(FavoritesContext);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    favorites.forEach((id) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          setPokemonData((prevData) => [...prevData, response.data].sort((a, b) => a.id - b.id));
        })
    );
  }, []);

  return (
    <>
    <main>
    <div className="container">
    {pokemonData.map((poke)=>
        <div className='container-card' >
          <div className='card'>
            <h3 className='pokemon-name'><span>#{poke.id}</span>{poke.name.substring(0,1).toUpperCase()+poke.name.substring(1).toLowerCase()}</h3>
            <img src={poke.sprites.front_default} alt={poke.id} width={"100px"} className='pokemon-image'/>
          </div>
        </div>
      )}
      </div>
    </main> 
    </>
  )
}

export default Favorites
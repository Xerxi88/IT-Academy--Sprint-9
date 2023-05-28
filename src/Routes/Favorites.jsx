import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../Context'
import axios from 'axios'
import FitxaPokemon from '../components/FitxaPokemon'

const Favorites = () => {

  const {favorites,setFavorites}=useContext(FavoritesContext);
  const [pokemonData, setPokemonData] = useState([]);
  const [showFavorites,setShowFavorites]=useState(false);
  const [pokeTarget,setPokeTarget]=useState(null);
  const [index,setIndex]=useState(5);

  useEffect(()=>{
    const localFavorites = localStorage.getItem('favs')||"[]"
    setFavorites(JSON.parse(localFavorites))
  },[])


  useEffect(() => {
    favorites.forEach((id) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          setPokemonData((prevData) => [...prevData, response.data].sort((a, b) => a.id - b.id));
        })
    );
  }, []);

  useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010`)
        .then((response) => setPokeTarget(response.data.results))

  }, []);

  const showPokemon = (poke)=>{
    const indexPoke = poke-1;
    setIndex(indexPoke);
    setShowFavorites(true);
  }

  return (
    <>
    <main>
    <div className="container">
    {
      pokemonData.map((poke)=>
      <div className='container-card' >
          <div className='card' onClick={()=>showPokemon(poke.id)} >
            <h3 className='pokemon-name'><span>#{poke.id}</span>{poke.name.substring(0,1).toUpperCase()+poke.name.substring(1).toLowerCase()}</h3>
            <img src={poke.sprites.front_default} alt={poke.id} width={"100px"} className='pokemon-image'/>
          </div>
        </div>
      )
    }
      </div>
      {pokeTarget && showFavorites ? (
            <FitxaPokemon
              pokemon={pokeTarget}
              index={index}
              setShowPokemon={setShowFavorites}
            />
          ) : (
            ""
          )}
    </main>
    </>
  )
}

export default Favorites
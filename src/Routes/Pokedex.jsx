import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../components/Pokemon";
import FitxaPokemon from "../components/FitxaPokemon";
import SearchBar from "../components/SearchBar";
import ReactHowler from "react-howler";
import check from "../audio/check.mp3";


function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonAll, setPokemonAll] = useState(null);
  const [showPokemon, setShowPokemon] = useState(false);
  const [indice, setIndice] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState("");
  let   [generacion,setGeneracion]=useState(1);
 
   const generations = {
    1:[0,151],
    2:[151,100],
    3:[251,135],
    4:[386,107],
    5:[494,155],
    6:[649,72],
    7:[721,88],
    8:[809,89],
    9:[905,103],
  }

  const generaciones = generations[generacion];


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${generaciones[0]}&limit=${generaciones[1]}`)
      .then((response) => setPokemon(response.data.results));
  }, [generacion]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010")
      .then((response) => setPokemonAll(response.data.results));
  }, []);

 

  return (
    <>
      <main>
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-binoculars-fill searchIcon"
            viewBox="0 0 16 16"
          >
            <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z" />
          </svg>
          <SearchBar setSearch={setSearch} />
        </div>
        <div className="main-container">
        <button className="generationsButtonText generationsButton" style={{ visibility: generacion < 2 ? "hidden" : "visible" }} onClick={()=>setGeneracion(--generacion)}>Generación anterior</button>
        <div className="generationsButtonRowLeft generationsButton" style={{ visibility: generacion < 2 ? "hidden" : "visible" }}onClick={()=>setGeneracion(--generacion)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg></div>
        <div className="container">
          {search && pokemonAll
            ? pokemonAll
                .filter((poke) => poke.name.includes(search.toLowerCase()))
                .map((item) => { 
                  const index = pokemonAll.findIndex(
                    (poke) => poke.name === item.name
                  );
                  return (
                    <>
                      <div key={item.name}>
                        <Pokemon
                          pokemon={pokemonAll}
                          index={index}
                          setShowPokemon={setShowPokemon}
                          setIndice={setIndice}
                          setSelectedPokemon={setSelectedPokemon}
                        />
                      </div>
                      <ReactHowler
                        src={check}
                        playing={selectedPokemon === index}
                      />
                    </>
                  );
                })
            : pokemon
            ? pokemon.map((item, index) => {
                return (
                  <>
                    <div key={item.name}>
                      <Pokemon
                        pokemon={pokemon}
                        index={index}
                        setShowPokemon={setShowPokemon}
                        setIndice={setIndice}
                        setSelectedPokemon={setSelectedPokemon}
                      />
                    </div>
                    <ReactHowler
                      src={check}
                      playing={selectedPokemon === index}
                    />
                  </>
                );
              })
            : ""}
          {pokemonAll && showPokemon ? (
            <FitxaPokemon
              pokemon={pokemonAll}
              index={indice}
              setShowPokemon={setShowPokemon}
            />
          ) : (
            ""
          )}
        </div>
        <button className="generationsButtonText generationsButton" style={{ visibility: generacion > 8 ? "hidden" : "visible" }} onClick={()=>setGeneracion(++generacion)}>Siguiente generación</button>
        <div className="generationsButtonRowRight generationsButton" onClick={()=>setGeneracion(++generacion)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg></div>
        </div>
      </main>
    </>
  );
}

export default Pokedex;

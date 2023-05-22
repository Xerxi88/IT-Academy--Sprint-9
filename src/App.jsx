import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import FitxaPokemon from "./components/FitxaPokemon";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import header from "./images/header.png";
import ReactHowler from "react-howler";
import check from "./audio/check.mp3";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [showPokemon, setShowPokemon] = useState(false);
  const [indice, setIndice] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251")
      .then((response) => setPokemon(response.data.results));
  }, []);

  console.log(search);

  return (
    <>
      <header>
        <img src={header} alt="pokeapi" />
      </header>
      <Nav />
      <main>
        <div className="search">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars-fill" viewBox="0 0 16 16">
        <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
        </svg><SearchBar setSearch={setSearch}/>
        </div>
        <div className="container">
          {pokemon
            ? pokemon
                .filter((poke) => poke.name.includes(search.toLowerCase()))
                .map((item) => {
                  const index = pokemon.findIndex(
                    (poke) => poke.name === item.name
                  );
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
          {pokemon && showPokemon ? (
            <FitxaPokemon
              pokemon={pokemon}
              index={indice}
              setShowPokemon={setShowPokemon}
            />
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

export default App;

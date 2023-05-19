import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./components/Pokemon";
import FitxaPokemon from "./components/FitxaPokemon";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [showPokemon,setShowPokemon]=useState(false);
  const [indice,setIndice]=useState(0);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251")
      .then((response) => setPokemon(response.data.results));
  }, []);

  return (
    <>
      <main>
      <div className="container">
      {pokemon
        ? pokemon.map((item, index) => (
            <div key={item.name} >
              <Pokemon pokemon={pokemon} index={index} setShowPokemon={setShowPokemon} setIndice={setIndice}/>
            </div>
          ))
        : ""}
        {pokemon && showPokemon ? <FitxaPokemon pokemon={pokemon} index={indice} setShowPokemon={setShowPokemon}/>:""}
        </div>
        </main>
    </>
  );
}

export default App;

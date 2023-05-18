import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40")
      .then((response) => setPokemon(response.data.results));
  }, []);

  return (
    <>
      <h1>Tarjetas pokemon</h1>
      <div className="container">
      {pokemon
        ? pokemon.map((item, index) => (
            <div key={item.name} >
              <Pokemon pokemon={pokemon} index={index}/>
            </div>
          ))
        : ""}
        </div>
    </>
  );
}

export default App;

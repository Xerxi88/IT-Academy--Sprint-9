import React, { useEffect, useState } from "react";
import axios from "axios";
import attack from "../images/attack.png"
import defense from "../images/defense.png"
import special from "../images/special.png"

const FitxaPokemon = ({ pokemon, setShowPokemon, index }) => {
  const [imgPokemon, setImgPokemon] = useState("");
  const [imgShiny, setImgShiny] = useState("");
  const [cardPokemon, setCardPokemon] = useState("");

  useEffect(() => {
    axios.get(pokemon[index].url).then((response) => {
      setImgPokemon(
        response.data.sprites.other["official-artwork"].front_default
      );
      setImgShiny(response.data.sprites.front_shiny);
      setCardPokemon(response.data);
    });
  }, []);

  const closeCard = () => {
    setShowPokemon(false);
  };

  const colorMap = {
    fighting: "#ce3f6b",
    psychic: "#f97077",
    poison: "#ab6ac8",
    dragon: "#096dc3",
    ghost: "#5269ad",
    ground: "#d97746",
    fire: "#fe9c55",
    fairy: "#ec90e7",
    water: "#4d90d6",
    flying: "#8fa8de",
    rock: "#c9b68b",
    electric: "#f4d23b",
    bug: "#90c02c",
    grass: "#65bc5e",
    ice: "#78c8c1",
    dark: "#5b5265",
    steel: "#5b8ea1",
  };

  const backgroundHeaderColor = colorMap[cardPokemon && cardPokemon.types[0].type.name] || "#9099a2";

  return (
    <>
      {cardPokemon && (
        <section className="fitxa-container" onClick={closeCard}>
          <article className="pokecard">
            <div className="header-card" ></div>
            <div className="header-backcard" style={{backgroundColor:backgroundHeaderColor}}>
            </div>
            <img
              className="header-image"
              src={imgPokemon}
              alt={imgPokemon}
              width={"100px"}
              style={{backgroundColor: backgroundHeaderColor}}
            />
            <div className="poke-info">
              <h1>
                <span>#{cardPokemon.id}</span>
                {cardPokemon.name.substring(0, 1).toUpperCase() +
                  cardPokemon.name.substring(1).toLowerCase()}
              </h1>
              <h2>
                {cardPokemon.types.map((poke) => {
                  const backgroundColor = colorMap[poke.type.name] || "#9099a2";
                  return (
                    <div className="poke-type" style={{ backgroundColor }} key={poke.type.name}>
                      {poke.type.name.toUpperCase()}
                    </div>
                  );
                })}
              </h2>
            </div>
            <div className="card-footer">
              <div className="card-footer-social">
                <h3 className="poke-stats">
                  <div className="icons-power">
                  <img src={attack} width={"20px"}/>
                  {cardPokemon.stats[1].base_stat}k
                  </div>
                  <p>Ataque</p>
                 
                </h3>
              </div>
              <div className="card-footer-social">
                <h3 className="poke-stats">
                <div className="icons-power">
                <img src={special} width={"20px"}/>
                  {cardPokemon.stats[3].base_stat}k
                  </div>
                  <p>Especial</p>
                </h3>
              </div>
              <div className="card-footer-social">
                <h3 className="poke-stats">
                <div className="icons-power">
                <img src={defense} width={"20px"}/>
                  {cardPokemon.stats[2].base_stat}k
                </div>
                  <p>Defensa</p>
                </h3>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default FitxaPokemon;

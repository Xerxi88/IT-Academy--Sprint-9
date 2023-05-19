import React, { useEffect, useState } from "react";
import axios from "axios";

const FitxaPokemon = ({ pokemon, setShowPokemon, index }) => {

    const [imgPokemon,setImgPokemon]=useState("");
    const [cardPokemon,setCardPokemon]=useState("");

  useEffect(() => {
    axios.get(pokemon[index].url)
    .then((response) => {setImgPokemon(response.data.sprites.other["official-artwork"].front_default);
                        setCardPokemon(response.data)
                        console.log(response.data)})
  }, []);

  const closeCard=()=>{
    setShowPokemon(false);
  }

  return (
    <>
      <section className="fitxa-container" onClick={closeCard}>
        <article className="pokecard">
          <div className="header-card"></div>
          <img src={imgPokemon} alt="" width={"100px"} />
          <div className="poke-info">
            <h1><span>#{cardPokemon.id}</span>{cardPokemon.name}</h1>
            <h2>Type</h2>
          </div>
          <div className="card-footer">
            <div className="card-footer-social">
              <h3>{cardPokemon.name}K</h3>
              <p>Ataque</p>
            </div>
            <div className="card-footer-social">
              <h3>803K</h3>
              <p>Especial</p>
            </div>
            <div className="card-footer-social">
              <h3>1.4K</h3>
              <p>Defensa</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default FitxaPokemon;

import React from "react";
import Pokemon from "../Pokemon"
import "./style.css"

const Pokedex = (props) => {
    const { pokemons } = props;
    return (
        <div className="pokedex-container">
            <h1 className="pokedex-title">Pokedex</h1>
            <div className="pokedex-grid">

                {pokemons.map((pokemon, index) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />

                })}
            </div>
        </div >
    )
}


export default Pokedex;
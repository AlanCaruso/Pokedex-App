import React from "react";
import "./style.css"

const Pokedex = (props) => {
    const { pokemons } = props;
    return (
        <div>
            <h1>Pokedex</h1>
            <div className="pokedex-grid">
                {pokemons.map((pokemon, index) => {
                    return (
                        <div key={pokemon.name}>#{index + 1}: {pokemon.name}</div>
                    )
                })}
            </div>
        </div>
    )
}


export default Pokedex;
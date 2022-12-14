import React from "react";
import "./style.css";


const Pokemon = (props) => {
    const { pokemon } = props;
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                    className="pokemon-img"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div className="pokemon-type-text" key={index}>{type.type.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
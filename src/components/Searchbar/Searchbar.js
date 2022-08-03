import React, { useState } from "react";
import "./style.css"
import { searchPokemon } from '../../api'

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value);
    }
    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input
                    placeholder="Search Pokemon..."
                    onChange={onChange}
                />
                <span className="searchbar-btn">
                    <button onClick={onClick}>Search</button>
                </span>
            </div>
            {pokemon &&
                <div>
                    <div>Name: {pokemon.name}</div>
                    <div>Weight: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} />
                </div>
            }
        </div>
    )
}

export default Searchbar;
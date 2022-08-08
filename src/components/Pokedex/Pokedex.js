import React from "react";
import Pokemon from "../Pokemon"
import Pagination from "../Pagination";
import "./style.css"

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);

    }
    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }


    return (
        <div className="pokedex-container">
            <div className="header">
                <h1 className="pokedex-title">Pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {loading ?
                <div className="loading-text">Loading...</div>
                :
                <div className="pokedex-grid">

                    {pokemons.map((pokemon, index) => {
                        return <Pokemon pokemon={pokemon} key={pokemon.name} />

                    })}
                </div>
            }
        </div >
    )
}


export default Pokedex;
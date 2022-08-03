import React, { useState } from "react";
import { searchPokemon } from '../../api'

const Searchbar = () => {


    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    }
    const onClick = async (e) => {
        const data = await searchPokemon(search);
        console.log(data)
    }

    return (
        <div>
            <div>
                <input
                    placeholder="Search Pokemon..."
                    onChange={onChange}
                />
                <span>
                    <button onClick={onClick}>Search</button>
                </span>
            </div>
        </div>
    )
}

export default Searchbar;
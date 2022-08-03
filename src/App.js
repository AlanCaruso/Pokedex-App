import { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex"
import Searchbar from "./components/Searchbar"
import { getPokemonData, getPokemons } from "./api"
import './App.css';


function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
    } catch (err) {

    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Searchbar />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;

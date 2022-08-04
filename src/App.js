import { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex"
import Searchbar from "./components/Searchbar"
import { getPokemonData, getPokemons } from "./api"
import './App.css';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0)

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(20, 20 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25))
    } catch (err) {

    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  return (
    <div className="App">
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
        loading={loading}

      />
    </div>
  );
}

export default App;

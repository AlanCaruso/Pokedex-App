import { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex"
import Searchbar from "./components/Searchbar"
import { getPokemons } from "./api"
import './App.css';


function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results)
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

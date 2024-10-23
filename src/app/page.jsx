"use client";
import { useEffect, useState } from "react";
import pokemanapi from "@/utils/pokemanapi";
import SelectField from "@/componets/FormFields/SelectField";
import InputTextField from "@/componets/FormFields/InputTextField";
import PokemonList from "@/componets/pokemanui/PokemonList";
import axios from "axios";

const HomePage = () => {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTypes = await pokemanapi.fetchPokemonTypes();
        const fetchedPokemons = await pokemanapi.fetchPokemons();
        let data = [];

        for (const pokemon of fetchedPokemons) {
          const detail = await axios.get(pokemon?.url);
          data.push({
            types: detail.data.types.map((type) => type.type.name),
            imageurl: detail.data.sprites.front_default,
            name: pokemon.name,
          });
        }

        setTypes(fetchedTypes);
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) => {
      const matchesType = selectedType
        ? pokemon.types.includes(selectedType)
        : true;
      return matchesType;
    });
    setSearchTerm("");
    setFilteredPokemons(filtered);
  }, [selectedType, pokemons]);

  const searchFucntionality = (e) => {
    e.preventDefault();
    const filtered = filteredPokemons.filter((pokemon) => {
      const matchesSearch = pokemon.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
    setFilteredPokemons(filtered);
  };
  return (
    <div>
      <div className="flex gap-4 flex-col sm:flex-row  justify-between my-6 px-2">
        <SelectField
          types={types}
          onTypeChange={(e) => setSelectedType(e.target.value)}
        />

        <form onSubmit={(e) => searchFucntionality(e)} className="flex gap-4">
          <InputTextField
            value={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-black px-4 py-2 w-full text-white rounded-md  flex items-center justify-center"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {filteredPokemons.length > 0 ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        "No Results Found"
      )}
    </div>
  );
};

export default HomePage;

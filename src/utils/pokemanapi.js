import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const fetchPokemonTypes = async () => {
  const response = await axios.get(`${BASE_URL}/type`);
  return response.data.results;
};

const fetchPokemons = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=100`);
  return response.data.results;
};

const fetchPokemonDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
  return response.data;
};

// Assign the object to a variable
const pokemanapi = {
  fetchPokemonTypes,
  fetchPokemons,
  fetchPokemonDetails,
};

export default pokemanapi;

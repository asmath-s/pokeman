import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="grid xl:grid-cols-6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 sm:gap-1 grid-cols-2 justify-center">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;

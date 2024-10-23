"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import pokemanapi from "@/utils/pokemanapi";

const PokemonDetails = () => {
  const pathname = usePathname();
  const pokemonName = pathname.split("/pokemon/").pop();
  const [pokemonData, setpokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async (pokemonName) => {
      const fetchedPokemons = await pokemanapi.fetchPokemonDetails(pokemonName);
      console.log(fetchedPokemons);
      setpokemonData(fetchedPokemons);
    };

    fetchData(pokemonName);
  }, [pokemonName]);

  return (
    <div className="h-[80vh] grid md:grid-cols-2 items-center justify-center">
      <div className="flex justify-center">
        <Image
          className="w-full"
          src={pokemonData?.sprites?.front_default}
          width={500}
          height={500}
          alt="Bulbasaur"
        />
      </div>
      <div className="px-4">
        <h1 className="text-2xl font-bold text-black mb-2">{pokemonName}</h1>
        <p className="text-md font-semibold text-black">Type</p>
        <div className="flex gap-2 mt-2 mb-4">
          {pokemonData?.types?.map((data, index) => (
            <p
              className="bg-black px-4 py-2  text-white rounded-md "
              key={index}
            >
              {data.type.name}
            </p>
          ))}
        </div>

        <p className="text-md font-semibold text-black">Ablities</p>
        <div className="flex gap-2 mt-2 mb-4">
          {pokemonData?.abilities?.map((data, index) => (
            <p
              className="bg-black px-4 py-2  text-white rounded-md "
              key={index}
            >
              {data.ability.name}
            </p>
          ))}
        </div>

        <div className="bg-[#FDC666] p-4 rounded-[8px]">
          <div className="text-md font-semibold text-black mb-2">
            stats:
            <p className="ml-2 font-normal">
              {pokemonData?.stats?.map((data, index) => (
                <span key={index}>
                  {data.stat.name}
                  {pokemonData?.stats?.length !== index + 1 && <span>, </span>}
                </span>
              ))}
            </p>
          </div>

          <div className="text-md font-semibold text-black mb-2">
            Some Moves:
            <p className="ml-2 font-normal">
              {pokemonData?.moves?.map((data, index) => (
                <span key={index}>
                  {data.move.name}
                  {pokemonData?.moves?.length !== index + 1 && <span>, </span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

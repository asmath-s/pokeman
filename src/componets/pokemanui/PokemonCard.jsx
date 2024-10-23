import Image from "next/image";
import { useRouter } from "next/navigation";
import BoltIcon from "../icons/BoltIcon";

const PokemonCard = ({ pokemon }) => {
  const router = useRouter();

  return (
    <div className=" m-2 text-center border border-gray-300 rounded-[15px] transition-transform duration-200 transform hover:scale-105">
      <div className="p-4 flex justify-center">
        <Image
          src={pokemon.imageurl}
          width={100}
          height={100}
          alt={pokemon.name}
        />
      </div>
      <div className="bg-zinc-100 px-6 pb-4 flex items-start flex-col rounded-b-[15px]">
        <h3 className="text-center w-full text-lg font-semibold mt-2 text-black capitalize">
          {pokemon.name}
        </h3>
        <button
          className="bg-black px-4 py-2 w-full text-white rounded-md mt-4 flex items-center justify-center"
          onClick={() => router.push(`/pokemon/${pokemon.name}`)}
        >
          <BoltIcon color="#fff" className="pr-2" />
          More Details
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;

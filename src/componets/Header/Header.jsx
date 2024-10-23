import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between  container mx-auto">
      <Image
        src={"/images/logo.webp"}
        alt="pokemon logo"
        width={120}
        height={80}
      />

      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Header;

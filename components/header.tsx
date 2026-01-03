import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center  px-2 shadow-2xl">
      <Image
        src="/logo.svg"
        width={250}
        height={95}
        loading="eager"
        alt="Logo devslug"
      />
    </header>
  );
}

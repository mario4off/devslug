import Image from "next/image";
import AuthButton from "./AuthButton";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();

  const isLogged = !!session;

  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center justify-between  px-2 shadow-2xl">
      <Image
        src="/logo.svg"
        width={250}
        height={95}
        loading="eager"
        alt="Logo devslug"
      />
      <div className="flex flex-col md:flex-row items-center gap-6 my-3">
        <p className="text-center">
          {!session ? "" : `👋    Hola, ${session?.user?.name}`}
        </p>
        <AuthButton isLogged={isLogged} className="me-5" />
      </div>
    </header>
  );
}

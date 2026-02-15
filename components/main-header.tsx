import Image from "next/image";
import AuthButton from "./auth-button";
import { auth } from "@/auth";

export default async function MainHeader() {
  const session = await auth();

  const isLogged = !!session;

  return (
    <header className="w-full bg-gradient-to-b from-black flex items-start justify-between  px-6 pt-3 shadow-2xl">
      <Image
        src="/logo.svg"
        width={250}
        height={95}
        loading="eager"
        alt="Logo devslug"
      />
      <div className="flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-6 my-4 sm:my-3">
        <p className="text-end">
          {!session ? "" : `👋    Hola, ${session?.user?.name}`}
        </p>
        <AuthButton isLogged={isLogged} className="me-5" />
      </div>
    </header>
  );
}

import Image from "next/image";
import AuthButton from "./auth-button";
import { auth } from "@/auth";

export default async function MainHeader() {
  const session = await auth();

  const isLogged = !!session;

  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center justify-center md:justify-between px-6 pt-3 shadow-2xl">
      <Image
        src="/logo.svg"
        width={250}
        height={95}
        loading="eager"
        alt="Logo devslug"
      />

      <AuthButton isLogged={isLogged} className="me-3  md:flex" />
    </header>
  );
}

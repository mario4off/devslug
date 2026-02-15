"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function SignIn({
  className,
  isLogged = false,
}: {
  className: string;
  isLogged: boolean;
}) {
  return !isLogged ? (
    <button
      onClick={() => signIn("google")}
      className={`${className} bg-white border rounded-md flex flex-col md:flex-row items-center gap-4 p-2 transform hover:scale-105 transition duration-300 ease-in-out`}
      type="button"
    >
      <Image
        src="/icons/google-icon-logo.svg"
        width={30}
        height={30}
        alt="Logo google"
      />
      <p className="text-black">Iniciar sesión</p>
    </button>
  ) : (
    <button
      onClick={() => signOut()}
      type="button"
      className={`${className} m-0 bg-black border border-gray-600 rounded-md text-white p-3 flex items-center gap-3  transition hover:border-white duration-300 ease-in-out`}
    >
      <Image
        src="/icons/signout.svg"
        width={30}
        height={30}
        alt="cerrar sesión"
      />
      <span className="hidden md:inline">Cerrar sesión</span>
    </button>
  );
}

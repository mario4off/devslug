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
  const hidden = className.includes("md:hidden") ? "hidden" : "";

  return !isLogged ? (
    <button
      onClick={() => signIn("google")}
      className={`${className} ${hidden == "" ? "hidden" : ""} bg-white border rounded-md flex items-center gap-4 p-2 transform hover:scale-105 transition duration-300 ease-in-out`}
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
      className={`${className} ${hidden} m-0 bg-gray-900 rounded-md text-gray-300 p-2 flex items-center gap-3  transition hover:border-white hover:text-white hover:bg-slate-800 duration-300 ease-in-out`}
    >
      {/* <Image
        src="/icons/signout.svg"
        width={30}
        height={30}
        alt="cerrar sesión"
      /> */}
      <span className={`${hidden} md:inline text-xs md:text-lg`}>
        Cerrar sesión
      </span>
    </button>
  );
}

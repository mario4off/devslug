"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignOut({ className }: { className: string }) {
  return (
    <button
      onClick={() => signOut()}
      type="button"
      className={`${className} border border-teal-400 rounded-md text-white p-3 flex items-center gap-3 hover:bg-teal-950 hover:scale-105 transition duration-300 ease-in-out`}
    >
      <Image
        src="/icons/signout.svg"
        width={30}
        height={30}
        alt="Cerrar sesión"
      />
      Cerrar sesión
    </button>
  );
}

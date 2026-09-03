"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignOutButton({ className }: { className: string }) {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/" })}
      type="button"
      className={`${className}  rounded-md border border-gray-900 bg-zinc-950  p-2 text-sm text-zinc-300 transition-colors duration-200 hover:bg-gray-900 hover:text-white`}
    >
      <span className={`hidden md:inline `}>Cerrar Sesión</span>
      <Image
        src="/icons/signout.svg"
        width={20}
        height={20}
        alt="logout icon"
        className="inline md:hidden"
      ></Image>
    </button>
  );
}

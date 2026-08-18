"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignOutButton({ className }: { className: string }) {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/" })}
      type="button"
      className={`${className} m-0 bg-gray-900 rounded-md text-gray-300 p-3 flex items-center gap-3  transition hover:border-white hover:text-white hover:bg-slate-800 duration-300 ease-in-out`}
    >
      <span className={` md:inline `}>Cerrar sesión</span>
    </button>
  );
}

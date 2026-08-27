"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignOutButton({ className }: { className: string }) {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/" })}
      type="button"
      className={`${className} flex items-center gap-2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 transition-colors hover:bg-white/10 hover:text-white`}
    >
      <span className={` md:inline `}>Cerrar sesión</span>
    </button>
  );
}

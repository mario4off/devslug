"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function SignInButton({ className }: { className: string }) {
  return (
    <button
      onClick={() => signIn("google")}
      className={`${className}  bg-white border rounded-md flex items-center gap-4 p-2 transform hover:scale-105 transition duration-300 ease-in-out`}
      type="button"
    >
      <Image
        src="/icons/google-icon-logo.svg"
        width={25}
        height={25}
        alt="Logo google"
      />
      <p className="text-black">Iniciar sesión</p>
    </button>
  );
}

"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn({ className }: { className: string }) {
  return (
    <button
      onClick={() => signIn("google")}
      className={`${className} bg-white border rounded-md flex items-center gap-4 p-2 transform hover:scale-105 transition duration-300 ease-in-out`}
      type="button"
    >
      <Image
        src="/icons/google-icon-logo.svg"
        width={30}
        height={30}
        alt="Logo google"
      />
      <p>Inicia Sesión</p>
    </button>
  );
}

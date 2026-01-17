"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import AuthButton from "./AuthButton";

export default function Header() {
  const { data: session, status } = useSession();
  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center justify-between  px-2 shadow-2xl">
      <Image
        src="/logo.svg"
        width={250}
        height={95}
        loading="eager"
        alt="Logo devslug"
      />
      <div className="flex flex-col md:flex-row items-center gap-6 my-3">
        <p className="text-center">
          {!session ? "" : `👋    Hola, ${session?.user?.name}`}
        </p>
        <AuthButton className="me-5" />
      </div>
    </header>
  );
}

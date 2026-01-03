"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default function Header() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center justify-between  px-2 shadow-2xl">
      <Image
        src="/logo.svg"
        width={250}
        height={95}
        loading="eager"
        alt="Logo devslug"
      />

      <SignIn className="me-5" />
      <SignOut className="me-5" />
    </header>
  );
}

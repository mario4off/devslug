import Image from "next/image";
import { auth } from "@/auth";
import SignInButton from "./sign-in-button";
import SignOutButton from "./sign-out-button";
import Link from "next/link";
import TopNav from "./top-nav";

export default async function MainHeader() {
  const session = await auth();
  const isLogged = !!session;

  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center justify-between px-6 pt-3 shadow-2xl">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={250}
          height={95}
          loading="eager"
          className="h-auto w-[180px] sm:w-[250px]"
          alt="Logo devslug"
        />
      </Link>
      <div className="flex gap-6 items-center">
        {!isLogged ? (
          <SignInButton />
        ) : (
          <>
            <TopNav />
            <SignOutButton />
          </>
        )}
      </div>
    </header>
  );
}

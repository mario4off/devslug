import Image from "next/image";
import { auth } from "@/auth";
import SignInButton from "./signInButton";
import SignOutButton from "./signOutButton";
import MobileMenu from "./mobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdowMenu";

export default async function MainHeader() {
  const session = await auth();

  const isLogged = !!session;

  return (
    <header className="w-full bg-gradient-to-b from-black flex items-center justify-between px-6 pt-3 shadow-2xl">
      <Image
        src="/logo.svg"
        width={250}
        height={95}
        loading="eager"
        alt="Logo devslug"
      />

      {!isLogged ? (
        <SignInButton className="hidden md:flex" />
      ) : (
        <>
          <div className="hidden md:block border border-slate-700 p-2  rounded-md transition duration-300 hover:border-slate-400 ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <SignOutButton className="" />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
      <MobileMenu isLogged={isLogged} />
    </header>
  );
}
